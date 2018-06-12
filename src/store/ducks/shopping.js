// Types
export const Types = {
  GET_REQUEST: 'shopping/GET_REQUEST',
  GET_SUCCESS: 'shopping/GET_SUCCESS',
};

// Reducers
const initialState = {
  products: [],
  categories: [],
  loading: false,
  errorMessage: null,
};

export default function shopping(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return state;

    default:
      return state;
  }
}

// Actions
export const Creators = {
  getRequest: () => ({
    type: Types.GET_REQUEST,
  }),
};
