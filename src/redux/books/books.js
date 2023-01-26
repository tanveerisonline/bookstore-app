// Actions
const ADD = 'add';
const DEL = 'del';

// Empty array of books
const initialState = [{
  id: 1,
  genre: 'genre',
  title: 'book title',
  author: 'author',
  status: 'complete',
  currentChapter: 'Current chapter',
  chapterNumber: 'Chapter #number',
},
];

// Reducer
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, {
        ...action.payload,
      }];
    case DEL:
      return [...state.filter((book) => book.id !== action.payLoad.id)];
    default: return state;
  }
}

// Action Creators
export function add(book) {
  return {
    type: ADD,
    payload: book,
  };
}

export function del(id) {
  return {
    type: DEL,
    payLoad: {
      id,
    },
  };
}
