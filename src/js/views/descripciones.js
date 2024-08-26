import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Context } from '../store/appContext';
import { CharacterDetails } from './characterDetails';
import { VehicleDetails } from './vehicleDetails';
import { PlanetDetails } from './planetDetails';

export const Descripciones = () => {
    const { id, type } = useParams();
    const { actions } = useContext(Context);
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        actions.loadDetails(type, id).then(details => {
            setItemDetails(details);
        });
    }, [id, type, actions]);

    const renderDetails = () => {
        console.log("Item Details:", itemDetails);
        
        switch (type) {
            case 'people': 
                return <CharacterDetails details={itemDetails} />;
            case 'vehicles':
                return <VehicleDetails details={itemDetails} />;
            case 'planets':
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
