import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { moveAction, holdMoveAction } from 'actions/piece.actions'
import {
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_DOWN,
  MOVE_CW,
  MOVE_CCW,
} from 'constants/moveTypes'

import ControllerButton from 'components/ControllerButton'

import styles from './Controller.styles'

const Controller = (props) => (
  <View style={styles.ControllerWrapper}>
    <View style={styles.controllerTop}>
      <View style={styles.directional}>
        <View style={styles.directionalTopRow}>
          <ControllerButton
            tapHandler={() => props.moveAction(MOVE_LEFT)} // eslint-disable-line react/prop-types
            holdHandler={() => props.holdMoveAction(MOVE_LEFT)} // eslint-disable-line react/prop-types
            releaseHandler = {() => props.holdMoveAction(null)} // eslint-disable-line react/prop-types
            type="left"
          />
          <ControllerButton
            tapHandler={() => props.moveAction(MOVE_RIGHT)} // eslint-disable-line react/prop-types
            holdHandler={() => props.holdMoveAction(MOVE_RIGHT)} // eslint-disable-line react/prop-types
            releaseHandler = {() => props.holdMoveAction(null)} // eslint-disable-line react/prop-types
            type="right"
          />
        </View>
        <View style={styles.directionalBottomRow}>
          <ControllerButton
            tapHandler={() => props.moveAction(MOVE_DOWN)} // eslint-disable-line react/prop-types
            holdHandler={() => props.holdMoveAction(MOVE_DOWN)} // eslint-disable-line react/prop-types
            releaseHandler = {() => props.holdMoveAction(null)} // eslint-disable-line react/prop-types
            type="down"
          />
        </View>
      </View>
      <View style={styles.rotate}>
        <View style={styles.rotateTopRow}>
          <ControllerButton
            tapHandler={() => props.moveAction(MOVE_CW)} // eslint-disable-line react/prop-types
            type="cw"
          />
        </View>
        <View style={styles.rotateBottomRow}>
          <ControllerButton
            tapHandler={() => props.moveAction(MOVE_CCW)} // eslint-disable-line react/prop-types
            type="ccw"
          />
        </View>
      </View>
    </View>
    <View style={styles.controllerBottom}>{/** TODO: pause */}</View>
  </View>
)

export default connect(
  null,
  { moveAction, holdMoveAction }
)(Controller)
