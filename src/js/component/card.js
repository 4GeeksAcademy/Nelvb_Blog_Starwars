import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Card = ({ title, imageUrl, description, linkUrl, onAddToFavorites, isFavorite, type }) => {
    // Determina si es un personaje para aplicar la clase adicional
    const imageClass = type === 'people' ? 'card-img-top characters' : 'card-img-top';

    return (
        <div className='card'>
            <img src={imageUrl} className={imageClass} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <div className='d-flex justify-content-between'>
                    <Link to={linkUrl} className='btn btn-primary'>Ver más</Link>
                    <button
                        onClick={onAddToFavorites}
                        className='btn btn-warning'
                    >
                        {isFavorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
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
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired, // Añadimos 'type' para distinguir entre personajes, vehículos y planetas
};
