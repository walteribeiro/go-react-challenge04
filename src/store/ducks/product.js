// Types
export const Types = {
  GET_REQUEST: 'product/GET_REQUEST',
  GET_SUCCESS: 'product/GET_SUCCESS',
};

// Reducers
const initialState = {
  data: [],
  loading: false,
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

// Actions
export const Creators = {
  getProductsRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getProductsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
