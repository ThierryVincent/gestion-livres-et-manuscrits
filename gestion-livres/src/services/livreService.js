// src/services/livreService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/livres';

export const getLivres = () => axios.get(API_URL);
export const createLivre = (livre) => axios.post(API_URL, livre);
export const deleteLivre = (id) => axios.delete(`${API_URL}/${id}`);
