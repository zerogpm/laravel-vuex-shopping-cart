export const numbers = (state) => state.numbers;

export const sum = (state) => {
  return state.numbers.reduce((a, b) =>  a + b, 0)
};
