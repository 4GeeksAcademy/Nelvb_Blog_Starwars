import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Card = ({ title, imageUrl, description, linkUrl, onAddToFavorites }) => {
    return (
        <div className='card' style={{ width: '18rem' }}>
            <img src={imageUrl} className='card-img-top' alt={title} />
            {/* alt es un atributo que proporciona un texto alternativo para la imagen. */}
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <div className='d-flex justify-content-between'>
                    <Link to={linkUrl} className='btn btn-primary'>Ver más</Link>
                    <button
                        onClick={onAddToFavorites}
                        className='btn btn-warning'
                    >
                        Añadir a favoritos
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    linkUrl: PropTypes.string,
    onAddToFavorites: PropTypes.func,
};
