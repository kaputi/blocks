import { SET_NEXT_PIECE, SET_PIECE } from 'constants/actionTypes'

export const setPiece = (payload) => ({
  type: SET_PIECE,
  payload,
})
export const nextPiece = (payload) => ({
  type: SET_NEXT_PIECE,
  payload,
})
