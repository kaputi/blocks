import {
  SET_NEXT_PIECE,
  SET_PIECE,
  UPDATE_PLACED_BLOCKS,
  CLEAR_BLOCKS,
} from 'constants/actionTypes'

export const setPiece = (payload) => ({
  type: SET_PIECE,
  payload,
})
export const nextPiece = (payload) => ({
  type: SET_NEXT_PIECE,
  payload,
})

export const updatePlacedBlocks = (payload) => ({
  type: UPDATE_PLACED_BLOCKS,
  payload,
})

export const clearBlocks = (payload) => ({
  type: CLEAR_BLOCKS,
  payload,
})
