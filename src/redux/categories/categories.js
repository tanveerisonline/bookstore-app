// Actions
const CHECKSTATUS = 'bookstore/categories/checkStatus';

// Reducer
export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default: return state;
  }
}

// Action Creators
export function checkStatus(id) {
  return {
    type: CHECKSTATUS,
    payload: { id },
  };
}
