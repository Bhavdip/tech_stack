const selection = (preState = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return preState;
  }
};
export default selection;
