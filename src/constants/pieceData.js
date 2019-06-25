/**
 * 0 = T
 * 1 = L
 * 2 = L other side
 * 3 = right step
 * 4 = left step
 * 5 = bar
 * 6 = square
 *
 * The map is relative to the origin, the y axis starts at the top, and the x axis at the left
 */
const pieceData = [
  {
    id: 0,
    name: 'T',
    color: 'purple',
    pieceMap: [
      [[0, 0], [-1, 0], [1, 0], [0, 1]],
      [[0, 0], [-1, 0], [0, 1], [0, -1]],
      [[0, 0], [-1, 0], [1, 0], [0, -1]],
      [[0, 0], [1, 0], [0, -1], [0, 1]],
    ],
  },
  {
    id: 1,
    name: 'RIGHT_L',
    color: 'orange',
    pieceMap: [
      [[0, 0], [0, -1], [1, 1], [0, 1]],
      [[0, 0], [-1, 0], [1, 0], [1, -1]],
      [[0, 0], [0, -1], [0, 1], [-1, -1]],
      [[0, 0], [-1, 0], [1, 0], [-1, 1]],
    ],
  },
  {
    id: 2,
    name: 'LEFT_L',
    color: 'blue',
    pieceMap: [
      [[0, 0], [0, 1], [0, -1], [-1, 1]],
      [[0, 0], [-1, 0], [1, 0], [-1, -1]],
      [[0, 0], [0, 1], [0, -1], [1, -1]],
      [[0, 0], [-1, 0], [1, 0], [1, 1]],
    ],
  },
  {
    id: 3,
    name: 'RIGHT_STEP',
    color: 'green',
    pieceMap: [
      [[0, 0], [1, 0], [0, 1], [-1, 1]],
      [[0, 0], [-1, 0], [-1, -1], [0, 1]],
      [[0, 0], [1, 0], [0, 1], [-1, 1]], // only 2 positions so they repeat
      [[0, 0], [-1, 0], [-1, -1], [0, 1]], // only 2 positions so they repeat
    ],
  },
  {
    id: 4,
    name: 'LEFT_STEP',
    color: 'red',
    pieceMap: [
      [[0, 0], [0, 1], [1, 1], [-1, 0]],
      [[0, 0], [1, 0], [1, -1], [0, 1]],
      [[0, 0], [0, 1], [1, 1], [-1, 0]], // only 2 positions so they repeat
      [[0, 0], [1, 0], [1, -1], [0, 1]], // only 2 positions so they repeat
    ],
  },
  {
    id: 5,
    name: 'BAR',
    color: 'lightblue',
    pieceMap: [
      [[0, 0], [0, 1], [0, -1], [0, -2]],
      [[0, 0], [-1, 0], [1, 0], [2, 0]],
      [[0, 0], [0, 1], [0, -1], [0, -2]], // only 3 positions so repeat
      [[0, 0], [-1, 0], [-2, 0], [1, 0]],
    ], // TODO:
  },
  {
    id: 6,
    name: 'SQUARE',
    color: 'yellow',
    pieceMap: [
      [[0, 0], [1, 0], [0, 1], [1, 1]],
      [[0, 0], [1, 0], [0, 1], [1, 1]], // only 1 position so they repeat
      [[0, 0], [1, 0], [0, 1], [1, 1]], // only 1 position so they repeat
      [[0, 0], [1, 0], [0, 1], [1, 1]], // only 1 position so they repeat
    ],
  },
]

export default pieceData
