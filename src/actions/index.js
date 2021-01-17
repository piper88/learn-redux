//the thing you want to do
//a function that returns an object
export const increment = () => {
  return {
    type: 'INCREMENT',
    //often have second property 'payload', could be a multiplier, if you wanted to count by a number other than 1
  }
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}
