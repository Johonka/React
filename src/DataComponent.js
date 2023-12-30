import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataComponent.css';

const DataComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hämta produkter från servern när komponenten monteras
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.pict_name} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.text}</p>
            <p className="product-price">{product.price} kr</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;
