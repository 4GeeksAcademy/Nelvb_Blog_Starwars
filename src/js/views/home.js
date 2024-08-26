import React, { useContext } from "react";
import { Context } from '../store/appContext';
import { Card } from '../component/card';

export const Home = () => {
    const { store, actions } = useContext(Context);

    const isFavorite = (item, type) => {
        return store.favorites.some(favorite => favorite.uid === item.uid && favorite.type === type);
    }

    const addToFavorites = (item, type) => {
        actions.addToFavorites({ ...item, type });
    };

    const scrollLeft = (className) => {
        document.querySelector(`.${className}`).scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = (className) => {
        document.querySelector(`.${className}`).scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            <h2>Personajes</h2>
            <div className="card-row-wrapper">
                <button className="arrow-left" onClick={() => scrollLeft('card-row-people')}>{'<'}</button>
                <div className="card-row card-row-people">
                    {store.people.map((person) => (
                        <Card
                        key={`${person.uid}-people`}
                        title={person.name}
                        imageUrl={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                        description={`Ver más sobre ${person.name}`}
                        linkUrl={`/descripciones/people/${person.uid}`}
                        onAddToFavorites={() => addToFavorites(person, 'people')}
                        isFavorite={isFavorite(person, 'people')}
                        type="people"  // Añade este prop para identificar que es un personaje
                    />
                    ))}
                </div>
                <button className="arrow-right" onClick={() => scrollRight('card-row-people')}>{'>'}</button>
            </div>

            <h2>Vehículos</h2>
            <div className="card-row-wrapper">
                <button className="arrow-left" onClick={() => scrollLeft('card-row-vehicles')}>{'<'}</button>
                <div className="card-row card-row-vehicles">
                    {store.vehicles.map((vehicle) => (
                        <Card
                            key={`${vehicle.uid}-vehicles`}
                            title={vehicle.name}
                            imageUrl={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                            description={`Ver más sobre ${vehicle.name}`}
                            linkUrl={`/descripciones/vehicles/${vehicle.uid}`}
                            onAddToFavorites={() => addToFavorites(vehicle, 'vehicles')}
                            isFavorite={isFavorite(vehicle, 'vehicles')}
                        />
                    ))}
                </div>
                <button className="arrow-right" onClick={() => scrollRight('card-row-vehicles')}>{'>'}</button>
            </div>

            <h2>Planetas</h2>
            <div className="card-row-wrapper">
                <button className="arrow-left" onClick={() => scrollLeft('card-row-planets')}>{'<'}</button>
                <div className="card-row card-row-planets">
                    {store.planets.map((planet) => (
                        <Card
                            key={`${planet.uid}-planets`}
                            title={planet.name}
                            imageUrl={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                            description={`Ver más sobre ${planet.name}`}
                            linkUrl={`/descripciones/planets/${planet.uid}`}
                            onAddToFavorites={() => addToFavorites(planet, 'planets')}
                            isFavorite={isFavorite(planet, 'planets')}
                        />
                    ))}
                </div>
                <button className="arrow-right" onClick={() => scrollRight('card-row-planets')}>{'>'}</button>
            </div>
        </div>
    );
};
