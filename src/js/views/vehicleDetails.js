import React from 'react';
import PropTypes from 'prop-types';

export const VehicleDetails = ({ details }) => {
    // Extraer el UID de la URL
    const uid = details.url.split('/').slice(-1)[0];
    console.log('UID utilizado:', uid);

    // Construir la URL de la imagen usando el UID
    const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`;
    console.log('URL de la imagen:', imageUrl);

    return (
        <div className="vehicle-details-container">
            <div className="vehicle-image-container">
                <img 
                    src={imageUrl} 
                    alt={details.name} 
                    className="vehicle-image"
                    onError={(e) => {
                        console.log('Error cargando la imagen:', e.target.src);
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            <div className="vehicle-info">
                <h2>{details.name}</h2>
                <p><strong>Model:</strong> {details.model}</p>
                <p><strong>Manufacturer:</strong> {details.manufacturer}</p>
                <p><strong>Cost in Credits:</strong> {details.cost_in_credits}</p>
                <p><strong>Length:</strong> {details.length} m</p>
                <p><strong>Crew:</strong> {details.crew}</p>
                <p><strong>Passengers:</strong> {details.passengers}</p>
                <p><strong>Cargo Capacity:</strong> {details.cargo_capacity} kg</p>
            </div>
        </div>
    );
};

VehicleDetails.propTypes = {
    details: PropTypes.object.isRequired,
};
