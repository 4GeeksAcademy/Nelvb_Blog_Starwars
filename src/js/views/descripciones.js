import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Context } from '../store/appContext';
import { Details } from './details';

export const Descripciones = () => {
    const { id, type } = useParams();
    const { actions } = useContext(Context);
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        console.log("useEffect en Descripciones funciona");
        
        const loadDetails = async () => {
            console.log("Dentro de la función loadDetails");
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

            // Imprime detalles obtenidos para asegurar que se devulve respuesta correcta
            console.log("Detalles recibidos:", details);

            if (details) {
                setItemDetails({ ...details, uid: id });
            }
        };

        loadDetails();
    }, [id, type, actions]);

    return (
        <div className="container_descriptions mt-4">
            {itemDetails ? <Details details={itemDetails} type={type} /> : <p>Cargando detalles...</p>}
        </div>
    );
};
