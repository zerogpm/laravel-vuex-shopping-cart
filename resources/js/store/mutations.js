export const addRandomNumber = (state, {min, max}) => {
    let number = Math.floor(Math.random() * (max - min) + min);
    state.numbers.push(number)
}
