import React from 'react';
import PropTypes from 'prop-types';

export const VehicleDetails = ({ details }) => {
    return (
        <div>
            <h2>{details.name}</h2>
            <p><strong>Model:</strong> {details.model}</p>
            <p><strong>Manufacturer:</strong> {details.manufacturer}</p>
            <p><strong>Cost in Credits:</strong> {details.cost_in_credits}</p>
            <p><strong>Length:</strong> {details.length} m</p>
            <p><strong>Crew:</strong> {details.crew}</p>
            <p><strong>Passengers:</strong> {details.passengers}</p>
            <p><strong>Cargo Capacity:</strong> {details.cargo_capacity} kg</p>
        </div>
    );
};

VehicleDetails.propTypes = {
    details: PropTypes.object.isRequired,
};
