export const makeLengthTwo = (number: number) =>
 String(number).length >= 2 ? number : `0${number}`;
