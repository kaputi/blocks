import pieceData from 'constants/pieceData'
import blockSize from 'utils/blockSize'
import random from 'utils/random'

export const mapCoords = (pieceMap, x, y) => {
  const coordMap = pieceMap
    .map((pair) => [pair[0] + x, pair[1] + y])
    .filter((coordPair) => coordPair[1] > 0) // removes blocks above the game area
  return coordMap
}

export const mapPixels = (coordMap) => {
  const pixelMap = coordMap.map((pair) => [
    pair[0] * blockSize,
    pair[1] * blockSize,
  ])
  return pixelMap
}

export const createNewPiece = () => {
  const id = random(0, pieceData.length - 1)

  // initial
  const position = 0
  const x = 5
  const y = 1

  const { color, pieceMap } = pieceData[id]

  const coordMap = mapCoords(pieceMap[position], x, y)

  const pixelMap = mapPixels(coordMap)

  return { id, color, x, y, position, pixelMap }
}
// TODO: claculate piece should do everything
export const calculatePiece = ({
  id = random(0, pieceData.length - 1),
  position = 0,
  x = 5,
  y = 1,
}) => {
  const { pieceMap, color } = pieceData[id]

  const coordMap = mapCoords(pieceMap[position], x, y)

  const pixelMap = mapPixels(coordMap)

  return { id, color, x, y, position, pixelMap, coordMap }
}
