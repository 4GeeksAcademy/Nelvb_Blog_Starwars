import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Context } from '../store/appContext';
import { CharacterDetails } from './characterDetails';
import { VehicleDetails } from './vehicleDetails';
import { PlanetDetails } from './planetDetails';



export const Descripciones = () => {
    const { id, type } = useParams(); // Obtén el ID y el tipo del elemento desde la URL
    const { store, actions } = useContext(Context); // Accede al store y las acciones desde el Context
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        actions.loadDetails(type, id).then(details => {
            setItemDetails(details);
        });
    }, []);

    const renderDetails = () => {
        console.log("Item Details:", itemDetails); // Verifica los detalles aquí
        
        switch (type) {
            case 'character':
                return <CharacterDetails details={itemDetails} />;
            case 'vehicle':
                return <VehicleDetails details={itemDetails} />;
            case 'planet':
                return <PlanetDetails details={itemDetails} />;
            default:
                return <p>No hay detalles disponibles.</p>;
        }
    };

    return (
        <div className="container mt-4">
            {itemDetails ? renderDetails() : <p>Cargando detalles...</p>}
        </div>
    );
};
