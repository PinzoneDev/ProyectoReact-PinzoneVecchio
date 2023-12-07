import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Aquí puedes realizar una llamada a tu API o utilizar async-mocks para obtener los detalles del ítem con el ID proporcionado
        // Por ahora, usaremos un objeto dummy para representar los detalles del ítem
        const fetchItem = async () => {
            try {
                // Simulamos una llamada a la API para obtener los detalles del ítem por su ID
                const response = await fetch(`https://api.example.com/items/${id}`);
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchItem();
    }, [id]);

    if (!item) {
        return <div>Cargando los detalles del ítem...</div>;
    }

    return (
        <div>
            <h2>Detalles del ítem: {id}</h2>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            {/* detalles adicionales del ítem */}
        </div>
    );
};

export default ItemDetailContainer;

