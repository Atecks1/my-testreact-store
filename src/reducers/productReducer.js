import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SELECT_PRODUCT
  } from '../actions/productActions';
  
  const initialState = {
    loading: false,
    products: [],
    error: '',
    selectedProductId: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: '',
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          products: [],
          error: action.payload,
        };
      case SELECT_PRODUCT:
          return {
              ...state,
              selectedProductId: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default productReducer;