import React from 'react';

const ProductItem = React.memo(({ product, onSelect, isSelected }) => {
  console.log(`Rendering ProductItem: ${product.title}`); 

  return (
    <div
      className={`product-item ${isSelected ? 'selected' : ''}`} 
      onClick={() => onSelect(product.id)}

    >
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} style={{ height: '120px' }} />
      <p>${product.price}</p>
    </div>
  );
});

export default ProductItem;