import { START_GAME, STOP_GAME, PAUSE_GAME } from 'constants/actionTypes'
import { GAME_STOPPED, GAME_RUNNING, GAME_PAUSED } from 'constants/gameStates'

const initialState = {
  state: GAME_STOPPED,
  score: 0,
  time: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, state: GAME_RUNNING }
    case PAUSE_GAME:
      return { ...state, state: GAME_PAUSED }
    case STOP_GAME:
      return { ...state, state: GAME_STOPPED }
    default:
      return state
  }
}
