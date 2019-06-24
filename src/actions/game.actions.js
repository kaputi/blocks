import { START_GAME, STOP_GAME, PAUSE_GAME } from 'constants/actionTypes'

export const startGame = () => ({
  type: START_GAME,
})

export const pauseGame = () => ({
  type: PAUSE_GAME,
})

export const stopGame = () => ({
  type: STOP_GAME,
})
