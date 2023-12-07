import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';

const Catalog = () => {
    const catalogItems = [
        {id: 1, name: 'DualSense', description: 'Playstation 5 Compatible', price: '100', image: image1},
        {id: 2, name: 'Series X Controller', description: 'Xbox/Windows Compatible', price: '100', image: image2},
        {id: 3, name: 'Pro Controller', description: 'Nintendo Switch Compatible', price: '100', image: image3},
        {id: 4, name: 'Smash Controller', description: 'Gamecube Compatible', price: '200', image: image4},
        {id: 5, name: 'Hitbox Arcade', description: 'Windows/Playstation 5 Compatible', price: '500', image: image5},
        {id: 6, name: 'Genesis Controller', description: 'Windows Compatible', price: '60', image: image6},
    ]

    return (
        <div className="container">
            <h1>Catálogo de Productos</h1>
            <div className="catalog-grid">
                {catalogItems.map(item => (
                    <Link to={`/item/${item.id}`} key={item.id} className="catalog-item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
