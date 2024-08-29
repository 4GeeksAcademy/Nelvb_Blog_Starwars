import React from 'react';
import PropTypes from 'prop-types';

export const Details = ({ details, type }) => {
    const uid = details.uid;

    const imageType = type === 'people' ? 'characters' : type;
    const imageUrl = `https://starwars-visualguide.com/assets/img/${imageType}/${uid}.jpg`;

    const renderDetails = () => {
        switch (type) {
            case 'people':
                return (
                    <>
                        <p>Altura: {details.height || 'Desconocido'} cm</p>
                        <p>Peso: {details.mass || 'Desconocido'} kg</p>
                        <p>Color de cabello: {details.hair_color || 'Desconocido'}</p>
                        <p>Color de piel: {details.skin_color || 'Desconocido'}</p>
                        <p>Color de ojos: {details.eye_color || 'Desconocido'}</p>
                        <p>Año de nacimiento: {details.birth_year || 'Desconocido'}</p>
                        <p>Género: {details.gender || 'Desconocido'}</p>
                    </>
                );
            case 'vehicles':
                return (
                    <>
                        <p>Modelo: {details.model || 'Desconocido'}</p>
                        <p>Fabricante: {details.manufacturer || 'Desconocido'}</p>
                        <p>Coste en créditos: {details.cost_in_credits || 'Desconocido'}</p>
                        <p>Longitud: {details.length || 'Desconocido'} m</p>
                        <p>Tripulación: {details.crew || 'Desconocido'}</p>
                        <p>Pasajeros: {details.passengers || 'Desconocido'}</p>
                        <p>Capacidad de carga: {details.cargo_capacity || 'Desconocido'} kg</p>
                    </>
                );
            case 'planets':
                return (
                    <>
                        <p>Clima: {details.climate || 'Desconocido'}</p>
                        <p>Diámetro: {details.diameter || 'Desconocido'} km</p>
                        <p>Gravedad: {details.gravity || 'Desconocido'}</p>
                        <p>Población: {details.population || 'Desconocido'}</p>
                        <p>Terreno: {details.terrain || 'Desconocido'}</p>
                        <p>Superficie de agua: {details.surface_water || 'Desconocido'}%</p>
                    </>
                );
            default:
                return <p>No hay detalles disponibles.</p>;
        }
    };

    return (
        <div className="details-container">
            <div className="details-image-container">
                <img
                    src={imageUrl}
                    alt={details.name}
                    className="details-image"
                    onError={(e) => {
                        console.log('Error cargando la imagen:', e.target.src);
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            <div className="details-info">
                <h1>{details.name}</h1>
                <p>{details.description}</p> {/* Asegúrate de renderizar la descripción */}
                {renderDetails()}
            </div>
        </div>
    );
    
};

Details.propTypes = {
    details: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
};
