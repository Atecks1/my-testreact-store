import React from 'react';
import { connect } from 'react-redux';

const StorePage = ({ products, selectedProductIds }) => {
  const selectedProducts = products.filter(product => selectedProductIds.includes(product.id));

  return (
    <div className="store-page">
      <h2>My Store</h2>
      {selectedProducts.length > 0 ? (
        <ul>
          {selectedProducts.map(product => (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products selected yet.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  selectedProductIds: state.selection.selectedProductIds,
});

export default connect(mapStateToProps)(StorePage);