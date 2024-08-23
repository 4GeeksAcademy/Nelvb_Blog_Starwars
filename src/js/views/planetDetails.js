import React from 'react';
import PropTypes from 'prop-types';

export const PlanetDetails = ({ details }) => {
    return (
        <div>
            <h2>{details.name}</h2>
            <p><strong>Climate:</strong> {details.climate}</p>
            <p><strong>Diameter:</strong> {details.diameter} km</p>
            <p><strong>Gravity:</strong> {details.gravity}</p>
            <p><strong>Population:</strong> {details.population}</p>
            <p><strong>Terrain:</strong> {details.terrain}</p>
            <p><strong>Surface Water:</strong> {details.surface_water}%</p>
        </div>
    );
};

PlanetDetails.propTypes = {
    details: PropTypes.object.isRequired,
};
