const getRandomInt = (min, max) => {
  const roundMin = Math.ceil(min)
  const roundMax = Math.floor(max)
  return Math.floor(Math.random() * (roundMax - roundMin + 1)) + roundMin
}

export default getRandomInt
