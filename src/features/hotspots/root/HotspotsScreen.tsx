import React, { memo, useCallback, useState } from 'react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import AddIcon from '@assets/images/add.svg'
import { Linking, Platform } from 'react-native'
import { useAsync } from 'react-async-hook'
import { useHotspotBle } from '@helium/react-native-sdk'
import { useSelector } from 'react-redux'
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions'
import Box from '../../../components/Box'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import { RootNavigationProp } from '../../../navigation/main/tabTypes'
import { EXPLORER_BASE_URL } from '../../../utils/config'
import { getAddress } from '../../../utils/secureAccount'
import useAlert from '../../../utils/useAlert'
import { RootState } from '../../../store/rootReducer'
import usePermissionManager from '../../../utils/usePermissionManager'

const HotspotsScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<RootNavigationProp>()
  const [accountAddress, setAccountAddress] = useState('')
  const { enable, getState } = useHotspotBle()
  const { showOKCancelAlert } = useAlert()
  const { requestLocationPermission } = usePermissionManager()
  const { permissionResponse } = useSelector(
    (state: RootState) => state.location,
  )

  const checkBluetooth = useCallback(async () => {
    const state = await getState()

    if (state === 'PoweredOn') {
      return true
    }

    if (Platform.OS === 'ios') {
      if (state === 'PoweredOff') {
        const decision = await showOKCancelAlert({
          titleKey: 'hotspot_setup.pair.alert_ble_off.title',
          messageKey: 'hotspot_setup.pair.alert_ble_off.body',
          okKey: 'generic.go_to_settings',
        })
        if (decision) Linking.openURL('App-Prefs:Bluetooth')
      } else {
        const decision = await showOKCancelAlert({
          titleKey: 'hotspot_setup.pair.alert_ble_off.title',
          messageKey: 'hotspot_setup.pair.alert_ble_off.body',
          okKey: 'generic.go_to_settings',
        })
        if (decision) Linking.openURL('app-settings:')
      }
    }
    if (Platform.OS === 'android' && Platform.Version >= 31) {
      const resultTest2 = await check(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT)
      if (resultTest2 === RESULTS.GRANTED) {
        await enable()
        return true
      }
    }
  }, [enable, getState, showOKCancelAlert])

  const checkLocation = useCallback(async () => {
    if (Platform.OS === 'ios') return true

    if (permissionResponse?.granted) {
      return true
    }

    const response = await requestLocationPermission()

    if (response && response.granted) {
      return true
    }
  }, [permissionResponse?.granted, requestLocationPermission])

  useAsync(async () => {
    await checkBluetooth()
    await checkLocation()
    const account = await getAddress()
    setAccountAddress(account || '')
  }, [])

  const addHotspot = useCallback(
    () => navigation.push('HotspotSetup'),
    [navigation],
  )

  const assertHotspot = useCallback(
    () => navigation.push('HotspotAssert'),
    [navigation],
  )

  const transferHotspot = useCallback(
    () => navigation.push('TransferHotspot'),
    [navigation],
  )

  const openExplorer = useCallback(
    () => Linking.openURL(`${EXPLORER_BASE_URL}/accounts/${accountAddress}`),
    [accountAddress],
  )

  return (
    <Box backgroundColor="primaryBackground" flex={1}>
      <BottomSheetModalProvider>
        <Box
          padding="l"
          flex={1}
          justifyContent="center"
          backgroundColor="primaryBackground"
        >
          <Text variant="h2">{t('hotspots.empty.title')}</Text>
          <Text variant="body1" marginTop="ms">
            {t('hotspots.empty.body')}
          </Text>
          <Button
            onPress={addHotspot}
            height={48}
            marginTop="l"
            mode="contained"
            title={t('hotspots.empty.hotspots.add')}
            Icon={AddIcon}
          />
          <Button
            onPress={assertHotspot}
            height={48}
            marginTop="l"
            mode="contained"
            title={t('hotspots.empty.hotspots.assertLocation')}
          />
          <Button
            onPress={transferHotspot}
            height={48}
            marginTop="l"
            mode="contained"
            title={t('hotspots.empty.hotspots.transfer')}
          />
          <Text variant="body1" marginTop="l">
            {t('hotspots.view_activity')}
            <Text variant="body1" color="primary" onPress={openExplorer}>
              {t('hotspots.explorer')}
            </Text>
            {t('generic.period')}
          </Text>
        </Box>
      </BottomSheetModalProvider>
    </Box>
  )
}

export default memo(HotspotsScreen)
