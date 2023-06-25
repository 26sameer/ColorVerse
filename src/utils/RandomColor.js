export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 2 ** 24)
    .toString(16)
    .padStart(6, 0)
  return '#' + randomColor
}
