import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useHotspotBle } from '@helium/react-native-sdk'
import { ActivityIndicator, Platform } from 'react-native'
import { useAsync } from 'react-async-hook'
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions'
import Box from '../../../components/Box'
import { DebouncedButton } from '../../../components/Button'
import SafeAreaBox from '../../../components/SafeAreaBox'
import Text from '../../../components/Text'
import {
  HotspotSetupNavigationProp,
  HotspotSetupStackParamList,
} from './hotspotSetupTypes'
import sleep from '../../../utils/sleep'
import { useColors } from '../../../theme/themeHooks'
import useAlert from '../../../utils/useAlert'

type Route = RouteProp<HotspotSetupStackParamList, 'HotspotSetupScanningScreen'>

const SCAN_DURATION = 6000
const HotspotSetupScanningScreen = () => {
  const { showOKAlert, showOKCancelAlert } = useAlert()

  useAsync(async () => {
    let showMyAlert = true
    if (Platform.OS === 'android' && Platform.Version >= 31) {
      const resultTest = await check(PERMISSIONS.ANDROID.BLUETOOTH_SCAN)
      if (resultTest === RESULTS.GRANTED) {
        const resultTest2 = await check(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT)
        if (resultTest2 === RESULTS.GRANTED) {
          showMyAlert = false
        }
      }
    } else {
      showMyAlert = false
    }

    if (showMyAlert) {
      const decision = await showOKCancelAlert({
        titleKey: 'permissions.bluetooth.title',
        messageKey: 'permissions.bluetooth.message',
      })
      if (!decision) {
        await showOKAlert({
          titleKey: 'permissions.bluetooth_not_granted.title',
          messageKey: 'permissions.bluetooth_not_granted.message',
        })
        return
      }
    }

    if (Platform.OS === 'android' && Platform.Version >= 31) {
      await request(PERMISSIONS.ANDROID.BLUETOOTH_SCAN).then((result) => {
        // setPermissionResult(result)
        console.log(result)
        if (result !== RESULTS.GRANTED) {
          showOKAlert({
            titleKey: 'permissions.bluetooth_not_granted.title',
            messageKey: 'permissions.bluetooth_not_granted.message',
          })
        }
      })
      await request(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT).then((result) => {
        // setPermissionResult(result)
        console.log(result)
      })
    }
  }, [])

  const { t } = useTranslation()
  const { primaryText } = useColors()
  const { startScan, stopScan } = useHotspotBle()
  const { params } = useRoute<Route>()
  const navigation = useNavigation<HotspotSetupNavigationProp>()

  useEffect(() => {
    const scan = async () => {
      await startScan((error) => {
        if (error) {
          // TODO: handle error
          // eslint-disable-next-line no-console
          console.log(error)
        }
      })
      await sleep(SCAN_DURATION)
      stopScan()
      navigation.replace('HotspotSetupPickHotspotScreen', params)
    }
    scan()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SafeAreaBox
      backgroundColor="primaryBackground"
      flex={1}
      alignItems="center"
    >
      <Box flex={1} />

      <Text
        marginTop="xl"
        variant="body2"
        numberOfLines={1}
        adjustsFontSizeToFit
        textAlign="center"
      >
        {t('hotspot_setup.ble_scan.title')}
      </Text>
      <Box flex={1} justifyContent="center">
        <ActivityIndicator color={primaryText} />
      </Box>
      <DebouncedButton
        marginBottom="m"
        justifyContent="flex-end"
        onPress={navigation.goBack}
        variant="primary"
        mode="text"
        title={t('hotspot_setup.ble_scan.cancel')}
      />
    </SafeAreaBox>
  )
}

export default HotspotSetupScanningScreen
