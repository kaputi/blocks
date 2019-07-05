import { StyleSheet } from 'react-native'

const center = { justifyContent: 'center', alignItems: 'center' }
const row = { flexDirection: 'row' }

const styles = StyleSheet.create({
  ControllerWrapper: {
    backgroundColor: 'green',
    alignItems: 'center',
    paddingTop: 100,
    flex: 1,
  },
  controllerTop: {
    ...center,
    ...row,
  },
  constrollerBottom: {
    alignItems: 'center',
  },
  directional: {
    flex: 1,
    ...center,
  },
  directionalTopRow: {
    ...row,
    ...center,
  },
  directionalBottomRow: {
    ...center,
  },
  rotate: {
    flex: 1,
  },
  rotateTopRow: {
    flexDirection: 'row-reverse',
  },
  rotateBottomRow: {},
})

export default styles
