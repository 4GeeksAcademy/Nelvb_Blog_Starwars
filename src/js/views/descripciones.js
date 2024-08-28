import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Context } from '../store/appContext';
import { Details } from './details';

export const Descripciones = () => {
    const { id, type } = useParams();
    const { actions } = useContext(Context);
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        const loadDetails = async () => {
            let details;
            switch (type) {
                case 'people':
                    details = await actions.loadCharacterDetails(id);
                    break;
                case 'vehicles':
                    details = await actions.loadVehicleDetails(id);
                    break;
                case 'planets':
                    details = await actions.loadPlanetDetails(id);
                    break;
                default:
                    console.error('Tipo desconocido:', type);
            }
            if (details) {
                setItemDetails({ ...details, uid: id }); // Asegúrate de pasar el uid correctamente
            }
        };

        loadDetails();
    }, [id, type, actions]);

    return (
        <div className="container mt-4">
            {itemDetails ? <Details details={itemDetails} type={type} /> : <p>Cargando detalles...</p>}
        </div>
    );
};
