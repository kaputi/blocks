import { createStore, combineReducers } from 'redux'

import pieceReducer from 'reducers/piece.reducer'
import gameReducer from 'reducers/game.reducer'

const rootReducer = combineReducers({
  piece: pieceReducer,
  game: gameReducer,
})

const store = createStore(rootReducer)

export default store
