import React from 'react';
import PropTypes from 'prop-types';

export const PlanetDetails = ({ details }) => {
    // Extraer el UID de la URL
    const uid = details.url.split('/').slice(-1)[0];
    console.log('UID utilizado:', uid);

    // Construir la URL de la imagen usando el UID
    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;
    console.log('URL de la imagen:', imageUrl);

    return (
        <div className="planet-details-container">
            <div className="planet-image-container">
                <img 
                    src={imageUrl} 
                    alt={details.name} 
                    className="planet-image"
                    onError={(e) => {
                        console.log('Error cargando la imagen:', e.target.src);
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            <div className="planet-info">
                <h2>{details.name}</h2>
                <p><strong>Climate:</strong> {details.climate}</p>
                <p><strong>Diameter:</strong> {details.diameter} km</p>
                <p><strong>Gravity:</strong> {details.gravity}</p>
                <p><strong>Population:</strong> {details.population}</p>
                <p><strong>Terrain:</strong> {details.terrain}</p>
                <p><strong>Surface Water:</strong> {details.surface_water}%</p>
            </div>
        </div>
    );
};

PlanetDetails.propTypes = {
    details: PropTypes.object.isRequired,
};
