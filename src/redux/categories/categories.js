const CHECK = 'STATUS_CHECKED';

const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return [action.text];
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK,
  text: 'Under construction',
});

export default checkStatusReducer;
