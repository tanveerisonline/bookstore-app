// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default: return state;
  }
};
export default reducer;

// Actions
const checkStatus = () => ({ type: CHECK_STATUS });

export { checkStatus };
