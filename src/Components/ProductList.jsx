import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';
import './ProductList.css'; // Importar archivo CSS para estilos específicos del componente

const ProductList = () => {
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); // Estado para almacenar productos deshabilitados

  const products = [
    { id: 1, name: 'Producto A', price: 60 },
    { id: 2, name: 'Producto B', price: 75 },
    { id: 3, name: 'Producto C', price: 30 },
  ];

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]); // Marcar el producto como deshabilitado
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Productos</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button 
              className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`} 
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.id)} // Deshabilitar botón si el producto está en disabledProducts
            >
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;