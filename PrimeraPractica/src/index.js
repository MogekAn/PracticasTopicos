//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa los estilos de Tailwind y cualquier personalización

// Importa el componente principal de la aplicación
import App from '../app/page';

// Renderiza la aplicación en el DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
