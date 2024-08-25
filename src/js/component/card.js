import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Card = ({ title, imageUrl, description, linkUrl, onAddToFavorites, isFavorite }) => { // Asegúrate de que 'isFavorite' esté correctamente escrito aquí
    return (
        <div className='card' style={{ width: '18rem' }}>
            <img src={imageUrl} className='card-img-top' alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <div className='d-flex justify-content-between'>
                    <Link to={linkUrl} className='btn btn-primary'>Ver más</Link>
                    <button
                        onClick={onAddToFavorites}
                        className='btn btn-warning'
                    >
                        { isFavorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    onAddToFavorites: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool.isRequired, // Asegúrate de que 'isFavorite' sea obligatorio y esté bien manejado
};
