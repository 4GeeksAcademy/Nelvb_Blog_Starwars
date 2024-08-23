import React, { useContext } from "react";
import { Context } from '../store/appContext';
import { Card } from '../component/card';

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-4">
            <h2>Personajes</h2>
            <div className='d-flex flex-wrap'>
                {store.characters.map((character, index) => (
                    <Card
                        key={index}
                        title={character.name}
                        imageUrl={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}  // Línea corregida para que use correctamente la sintaxis de ES6
                        description={`Ver más sobre ${character.name}`}  // Línea corregida para que use correctamente la sintaxis de ES6
                        linkUrl={`/descripciones/character/${character.uid}`}  // Línea corregida para que use correctamente la sintaxis de ES6
                        onAddToFavorites={() => actions.addToFavorites(character)}
                    />
                ))}
            </div>

            <h2>Vehículos</h2>
            <div className='d-flex flex-wrap'>
                {store.vehicles.map((vehicle, index) => (
                    <Card
                        key={index}
                        title={vehicle.name}
                        imageUrl={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}  // Línea corregida para que use correctamente la sintaxis de ES6
                        description={`Ver más sobre ${vehicle.name}`}  // Línea corregida para que use correctamente la sintaxis de ES6
                        linkUrl={`/descripciones/vehicles/${vehicle.uid}`}  // Cambiado de 'vehicle' a 'vehicles' para usar el plural correcto
                        onAddToFavorites={() => actions.addToFavorites(vehicle)}
                    />
                ))}
            </div>

            <h2>Planetas</h2>
            <div className='d-flex flex-wrap'>
                {store.planets.map((planet, index) => (
                    <Card
                        key={index}
                        title={planet.name}
                        imageUrl={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}  // Línea corregida para que use correctamente la sintaxis de ES6
                        description={`Ver más sobre ${planet.name}`}  // Línea corregida para que use correctamente la sintaxis de ES6
                        linkUrl={`/descripciones/planets/${planet.uid}`}  // Cambiado de 'planet' a 'planets' para usar el plural correcto
                        onAddToFavorites={() => actions.addToFavorites(planet)}
                    />
                ))}
            </div>
        </div>
    );
};
