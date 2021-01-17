
//reducer describes how your actions interacts with your state
//it will check what action you did, and based on this, decide how to alter the state
const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
