import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/navbar';
import Catalog from './components/Catalog';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />} />
          <Route path='/category/:id' element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

