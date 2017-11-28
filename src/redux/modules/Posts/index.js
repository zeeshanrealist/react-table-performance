const LOAD_POSTS = 'redux-example/posts/LOAD_POSTS';
const LOAD_POSTS_SUCCESS = 'redux-example/posts/LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAIL = 'redux-example/posts/LOAD_POSTS_FAIL';

const initialState = {
  loading: null,
  loaded: null,
  list: [],
  headers: []
};

const constructHeaders = (dataObj) => {
  const headers = [];
  Object.keys(dataObj).map((key) => {
    headers.push(key.toUpperCase());
  });
  return headers;
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        loading: true
      };
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.result,
        headers: constructHeaders(action.result[0])
      };
    case LOAD_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
}

export function loadTableData(tableName) {
  return {
    types: [LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAIL],
    promise: (client) => client.get(`https://jsonplaceholder.typicode.com/${tableName}`)
  };
}
