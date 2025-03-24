import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { selectProduct, clearSelectedProducts } from '../actions/selectionActions';
import ProductItem from './ProductItem';

const ProductList = ({ products, loading, error, fetchProducts, selectProduct, selectedProductIds, clearSelectedProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
      const storedProducts = localStorage.getItem('selectedProducts');
      if (storedProducts) {
          const productIds = JSON.parse(storedProducts);
          productIds.forEach(id => selectProduct(id));
      }

      const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('selectedProducts='))
        ?.split('=')[1];
      if (cookieValue) {
          const productIds = JSON.parse(decodeURIComponent(cookieValue));
          productIds.forEach(id => selectProduct(id));
      }
  }, [selectProduct]);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem('selectedProducts');
      document.cookie = 'selectedProducts=; max-age=0'; 
      clearSelectedProducts();
    }, 60000); 

    return () => clearTimeout(timer);
  }, [clearSelectedProducts]);

  const handleSelectProduct = useCallback(
    (productId) => {
      selectProduct(productId);
      const updatedProducts = [...selectedProductIds, productId];
      localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));

        document.cookie = `selectedProducts=${encodeURIComponent(JSON.stringify(updatedProducts))}; max-age=${60}`;

    },
    [selectProduct, selectedProductIds]
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <h2>Products</h2>
    <div className="product-list"> 
      
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onSelect={handleSelectProduct}
          isSelected={selectedProductIds.includes(product.id)} 
        />
      ))}
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
  error: state.product.error,
  selectedProductIds: state.selection.selectedProductIds, 
});

const mapDispatchToProps = {
  fetchProducts,
  selectProduct,
  clearSelectedProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);