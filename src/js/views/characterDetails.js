import React from 'react';

export const CharacterDetails = ({ details }) => {
    if (!details) {
        return <p>No hay detalles disponibles.</p>;
    }

    return (
        <div>
            <h1>{details.name}</h1>
            <p>Altura: {details.height} cm</p>
            <p>Peso: {details.mass} kg</p>
            <p>Color de cabello: {details.hair_color}</p>
            <p>Color de piel: {details.skin_color}</p>
            <p>Color de ojos: {details.eye_color}</p>
            <p>Año de nacimiento: {details.birth_year}</p>
            <p>Género: {details.gender}</p>
        </div>
    );
};
