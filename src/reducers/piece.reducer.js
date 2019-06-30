import {
  SET_PIECE,
  SET_NEXT_PIECE,
  UPDATE_PLACED_BLOCKS,
  CLEAR_BLOCKS,
} from 'constants/actionTypes'

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
    default:
      return state
  }
}
