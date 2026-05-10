// Importamos axios para hacer peticiones HTTP
import axios from "axios";

// URL base del backend FastAPI
const API = axios.create({
  baseURL: "https://biblioteca-fastapi-backend.onrender.com",
});

// Exportamos para usar en todo el proyecto
export default API;