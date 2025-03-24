export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const CLEAR_SELECTED_PRODUCTS = 'CLEAR_SELECTED_PRODUCTS';

export const selectProduct = (productId) => ({
  type: SELECT_PRODUCT,
  payload: productId,
});

export const clearSelectedProducts = () => ({
  type: CLEAR_SELECTED_PRODUCTS,
});