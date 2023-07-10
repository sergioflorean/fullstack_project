import axios from "axios";

export const getAllProducts = () => axios.get('http://localhost:8000/api/product')

export const createProduct = (product) => axios.post('http://localhost:8000/api/product/new', product);

export const getProduct = (id) => axios.get(`http://localhost:8000/api/product/${id}`);

export const updateProduct = (id, product) => axios.put(`http://localhost:8000/api/update/${id}`, product);

export const deleteProduct = (id) => axios.delete(`http://localhost:8000/api/product/${id}`);


