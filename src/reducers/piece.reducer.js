import {
  SET_PIECE,
  SET_NEXT_PIECE,
  UPDATE_PLACED_BLOCKS,
  CLEAR_BLOCKS,
  MOVE_PIECE,
  HOLD_MOVE,
} from 'constants/actionTypes'

import { MOVE_FINISH } from 'constants/moveTypes'

const initialState = {
  // current piece
  id: null,
  color: null,
  x: null,
  y: null,
  position: null,
  pixelMap: null,
  coordMap: null,
  // next piece
  next: null,
  // TODO: placed blocks needs to be somewherre else
  placedBlocks: [],
  // Move Piece
  move: MOVE_FINISH,
  holdMove: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PIECE:
      return { ...state, ...action.payload }
    case SET_NEXT_PIECE:
      return { ...state, next: action.payload }
    case UPDATE_PLACED_BLOCKS: {
      return {
        ...state,
        placedBlocks: [...state.placedBlocks, ...action.payload],
      }
    }
    case CLEAR_BLOCKS:
      return { ...state, placedBlocks: [...action.payload] }
    case MOVE_PIECE:
      return { ...state, move: action.payload }
    case HOLD_MOVE:
      return { ...state, holdMove: action.payload }
    default:
      return state
  }
}
