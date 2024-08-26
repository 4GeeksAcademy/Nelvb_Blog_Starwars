import React from 'react';
import PropTypes from 'prop-types';

export const CharacterDetails = ({ details }) => {
    if (!details) {
        return <p>No hay detalles disponibles.</p>;
    }

    // Construir la URL de la imagen usando el UID
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${details.url.split('/').slice(-1)[0]}.jpg`;

    return (
        <div className="character-details-container">
            <div className="character-image-container">
                <img 
                    src={imageUrl} 
                    alt={details.name} 
                    className="character-image"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            <div className="character-info">
                <h1>{details.name}</h1>
                <p>Altura: {details.height} cm</p>
                <p>Peso: {details.mass} kg</p>
                <p>Color de cabello: {details.hair_color}</p>
                <p>Color de piel: {details.skin_color}</p>
                <p>Color de ojos: {details.eye_color}</p>
                <p>Año de nacimiento: {details.birth_year}</p>
                <p>Género: {details.gender}</p>
            </div>
        </div>
    );
};

CharacterDetails.propTypes = {
    details: PropTypes.object.isRequired,
};
