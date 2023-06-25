export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 2 ** 24)
    .toString(16)
    .padStart(6, 0);
  return '#' + randomColor;
};

export const getInitialColor = () => {
  const value = '#23ed92';
  return value;
};

export const getInitialMode = () => {
  const modes = ['analogic', 'monochrome', 'analogic-complement', 'quad'];
  const randomMode = Math.floor(Math.random() * 3);
  console.log(randomMode);

  // const mode = 'analogic';
  return modes[randomMode];
};
