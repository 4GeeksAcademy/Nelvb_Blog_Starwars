import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Card = ({ title, imageUrl, description, linkUrl, onAddToFavorites, isFavorite, type }) => {
    const [imageError, setImageError] = useState(false);
    const imageClass = type === 'people' ? 'card-img-top characters' : 'card-img-top';
    const errorImagen = 'https://img.europapress.es/fotoweb/fotonoticia_20170608114213_1200.jpg';

    return (
        <div className='card'>
            <div className='image-container' style={{ position: 'relative' }}>
                <img 
                    src={imageUrl} 
                    className={imageClass} 
                    alt={title} 
                    onError={(e) => {
                        e.target.src = errorImagen;
                        setImageError(true);
                    }}
                />
                {imageError && <div className="image-overlay">Imagen no disponible</div>}
            </div>
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
    type: PropTypes.string.isRequired,
};
