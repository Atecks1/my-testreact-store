import { SELECT_PRODUCT, CLEAR_SELECTED_PRODUCTS } from '../actions/selectionActions';

const initialState = {
  selectedProductIds: [], 
};

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProductIds: [...state.selectedProductIds, action.payload], 
      };
    case CLEAR_SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProductIds: [], 
      };
    default:
      return state;
  }
};

export default selectionReducer;