import React, { useContext } from "react";
import { Context } from '../store/appContext';
import { Card } from '../component/card';

export const Home = () => {
	const { store, actions } = useContext(Context);

	const isFavorite = (item) => {
		return store.favorites.some(favorite => favorite.uid === item.uid)
	}

	return (
		<div className="container mt-4">
			<h2>Personajes</h2>
			<div className='d-flex flex-wrap'>
				{store.people.map((person, index) => (
					<Card
						key={index}
						title={person.name}
						imageUrl={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
						description={`Ver más sobre ${person.name}`}
						linkUrl={`/descripciones/people/${person.uid}`}
						onAddToFavorites={() => actions.addToFavorites(person)}
						isFAvorite={isFavorite(person)}
					/>
				))}
			</div>

			<h2>Vehículos</h2>
			<div className='d-flex flex-wrap'>
				{store.vehicles.map((vehicle, index) => (
					<Card
						key={index}
						title={vehicle.name}
						imageUrl={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
						description={`Ver más sobre ${vehicle.name}`}
						linkUrl={`/descripciones/vehicles/${vehicle.uid}`}
						onAddToFavorites={() => actions.addToFavorites(vehicle)}
						isFavorite={isFavorite(vehicle)}
					/>
				))}
			</div>

			<h2>Planetas</h2>
			<div className='d-flex flex-wrap'>
				{store.planets.map((planet, index) => (
					<Card
						key={index}
						title={planet.name}
						imageUrl={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
						description={`Ver más sobre ${planet.name}`}
						linkUrl={`/descripciones/planets/${planet.uid}`}
						onAddToFavorites={() => actions.addToFavorites(planet)}
						isFAvorite={isFavorite(planet)}
					/>
				))}
			</div>
		</div>
	);
};
