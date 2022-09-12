// import { LOCATION, askAsync, PermissionType, LOCATION_FOREGROUND, LOCATION_BACKGROUND } from 'expo-permissions'
import {
  askAsync,
  PermissionType,
  LOCATION_FOREGROUND,
  LOCATION_BACKGROUND,
} from 'expo-permissions'
import { useCallback } from 'react'
import { request, PERMISSIONS } from 'react-native-permissions'
import { Platform } from 'react-native'
import locationSlice from '../store/location/locationSlice'
import { useAppDispatch } from '../store/store'
import appSlice from '../store/user/appSlice'
import useAlert from './useAlert'

const usePermissionManager = () => {
  const { showOKCancelAlert } = useAlert()
  const dispatch = useAppDispatch()

  const requestPermission = useCallback(
    async (type: PermissionType) => {
      dispatch(appSlice.actions.requestingPermission(true))
      const response = await askAsync(type)
      dispatch(appSlice.actions.requestingPermission(false))
      return response
    },
    [dispatch],
  )

  const requestLocationPermission = useCallback(
    async (showAlert = true) => {
      if (showAlert) {
        const decision = await showOKCancelAlert({
          titleKey: 'permissions.location.title',
          messageKey: 'permissions.location.message',
        })
        if (!decision) return false
      }

      // const response = await requestPermission(LOCATION)
      const response = await requestPermission(LOCATION_FOREGROUND)
      dispatch(locationSlice.actions.updateLocationPermission(response))
      const responseBackground = await requestPermission(LOCATION_BACKGROUND)
      dispatch(
        locationSlice.actions.updateLocationPermission(responseBackground),
      )
      request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ).then((result) => {
        // setPermissionResult(result)
        console.log(result)
      })
      return response
    },
    [dispatch, requestPermission, showOKCancelAlert],
  )

  return { requestLocationPermission, requestPermission }
}
export default usePermissionManager
