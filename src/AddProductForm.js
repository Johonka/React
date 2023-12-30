import React, { useState } from 'react';
import axios from 'axios';
import './AddProductForm.css'

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    text: '',
    pict_name: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/addProduct', formData);
      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Text:
        <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Picture Name:
        <input type="text" name="pict_name" value={formData.pict_name} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
