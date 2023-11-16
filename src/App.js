import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import ItemListContainer from './components/ItemListContainer';

function App() {
  const greetingMessage = "¡Hola! Este es mi mensaje de saludo.";
  
  return (
    <div className="App">
      
      <Navbar /> {/* Utiliza el componente Navbar aquí */}
      <ItemListContainer greeting={greetingMessage} />
      <header className="App-header">
        {/* Contenido del header si lo deseas */}
      </header>
    
    </div>
  );
}

export default App;
