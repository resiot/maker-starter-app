import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native-gesture-handler'
import { Edge } from 'react-native-safe-area-context'
import { useAsync } from 'react-async-hook'
import { request, PERMISSIONS, RESULTS, check } from 'react-native-permissions'
import { Platform } from 'react-native'
import BackScreen from '../../../components/BackScreen'
import Box from '../../../components/Box'
import Text from '../../../components/Text'
import HotspotSetupSelectionListItem from './HotspotSetupSelectionListItem'
import {
  HotspotSetupNavigationProp,
  HotspotSetupStackParamList,
} from './hotspotSetupTypes'
import {
  HotspotType,
  HotspotModelKeys,
  HotspotMakerModels,
} from '../../../makers'
import { useBorderRadii } from '../../../theme/themeHooks'

import useAlert from '../../../utils/useAlert'

const ItemSeparatorComponent = () => (
  <Box height={1} backgroundColor="primaryBackground" />
)

type Route = RouteProp<
  HotspotSetupStackParamList,
  'HotspotSetupSelectionScreen'
>
const HotspotSetupSelectionScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<HotspotSetupNavigationProp>()
  const edges = useMemo((): Edge[] => ['top', 'left', 'right'], [])
  const radii = useBorderRadii()

  const { params } = useRoute<Route>()

  const { showOKAlert, showOKCancelAlert } = useAlert()

  const handlePress = useCallback(
    (hotspotType: HotspotType) => () => {
      const { onboardType } = HotspotMakerModels[hotspotType]
      if (onboardType === 'BLE') {
        navigation.push('HotspotSetupEducationScreen', {
          hotspotType,
          ...params,
        })
      } else {
        navigation.push('HotspotSetupExternalScreen', {
          hotspotType,
          ...params,
        })
      }
    },
    [navigation, params],
  )

  const keyExtractor = useCallback((item) => item, [])

  const data = useMemo(() => {
    return HotspotModelKeys
  }, [])

  const renderItem = useCallback(
    ({ item, index }) => {
      const isFirst = index === 0
      const isLast = index === data.length - 1
      return (
        <HotspotSetupSelectionListItem
          isFirst={isFirst}
          isLast={isLast}
          hotspotType={item}
          onPress={handlePress(item)}
        />
      )
    },
    [data.length, handlePress],
  )

  const flatListStyle = useMemo(() => {
    return { flex: 1, borderRadius: radii.m }
  }, [radii.m])

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

  return (
    <BackScreen
      backgroundColor="primaryBackground"
      paddingTop="m"
      padding="lx"
      hideBack
      onClose={navigation.goBack}
      edges={edges}
    >
      <Text variant="h1" numberOfLines={2} adjustsFontSizeToFit>
        {t('hotspot_setup.selection.title')}
      </Text>
      <Text
        variant="subtitle1"
        maxFontSizeMultiplier={1}
        numberOfLines={2}
        adjustsFontSizeToFit
        marginVertical="l"
      >
        {t('hotspot_setup.selection.subtitle')}
      </Text>

      <FlatList
        style={flatListStyle}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListFooterComponent={<Box height={32} />}
      />
    </BackScreen>
  )
}

export default memo(HotspotSetupSelectionScreen)
