import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Favoritos = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className='container mt-4'> 
            <h1>Favoritos</h1>
            {store.favorites.length > 0 ? (  
                <ul className='list-group favoritos'>
                    {store.favorites.map((favorite, index) => (
                        <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                            <Link to={`/descripciones/${favorite.type}/${favorite.uid}`}>
                                {favorite.name}
                            </Link>
                            <button
                                className='btn btn-danger btn-sm'
                                onClick={() => actions.removeFromFavorites(index)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay favoritos guardados.</p>
            )}
        </div>
    );
};
