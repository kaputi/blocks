import { SET_PIECE, SET_NEXT_PIECE } from 'constants/actionTypes'

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
  placedBlocks: [
    { x: 1, y: 18, color: 'green' },
    { x: 1, y: 17, color: 'green' },
    { x: 2, y: 18, color: 'purple' },
    { x: 5, y: 7, color: 'yellow' },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PIECE:
      return { ...state, ...action.payload }
    case SET_NEXT_PIECE:
      return { ...state, next: action.payload }
    default:
      return state
  }
}
