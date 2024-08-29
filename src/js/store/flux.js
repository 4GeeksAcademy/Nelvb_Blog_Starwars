const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: [],
            peopleDetail: [],
            vehicleDetail: [],
            planetDetail: [],
        },
        actions: {
            loadCharacters: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people');
                    const data = await response.json();

                    // Para cada personaje, obtenemos su descripción
                    const updatedPeople = await Promise.all(
                        data.results.map(async (person) => {
                            const res = await fetch(`https://www.swapi.tech/api/people/${person.uid}`);
                            const personData = await res.json();
                            return { ...person, description: personData.result.description };
                        })
                    );

                    setStore({ people: updatedPeople });
                } catch (error) {
                    console.error('Error loading people:', error);
                }
            },

            loadVehicles: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/vehicles');
                    const data = await response.json();

                    // Para cada vehículo, obtenemos su descripción
                    const updatedVehicles = await Promise.all(
                        data.results.map(async (vehicle) => {
                            const res = await fetch(`https://www.swapi.tech/api/vehicles/${vehicle.uid}`);
                            const vehicleData = await res.json();
                            return { ...vehicle, description: vehicleData.result.description };
                        })
                    );

                    setStore({ vehicles: updatedVehicles });
                } catch (error) {
                    console.error('Error loading vehicles:', error);
                }
            },

            loadPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets');
                    const data = await response.json();

                    // Para cada planeta, obtenemos su descripción
                    const updatedPlanets = await Promise.all(
                        data.results.map(async (planet) => {
                            const res = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}`);
                            const planetData = await res.json();
                            return { ...planet, description: planetData.result.description };
                        })
                    );

                    setStore({ planets: updatedPlanets });
                } catch (error) {
                    console.error('Error loading planets:', error);
                }
            },

            loadCharacterDetails: async (id) => {
                try {
                    const url = `https://www.swapi.tech/api/people/${id}`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    const { properties, description } = data.result;
                    return { ...properties, description, uid: id };
                } catch (error) {
                    console.error('Error loading character details:', error);
                    return null;
                }
            },

            loadVehicleDetails: async (id) => {
                try {
                    const url = `https://www.swapi.tech/api/vehicles/${id}`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    const { properties, description } = data.result;
                    return { ...properties, description, uid: id };
                } catch (error) {
                    console.error('Error loading vehicle details:', error);
                    return null;
                }
            },

            loadPlanetDetails: async (id) => {
                try {
                    const url = `https://www.swapi.tech/api/planets/${id}`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    const { properties, description } = data.result;
                    return { ...properties, description, uid: id };
                } catch (error) {
                    console.error('Error loading planet details:', error);
                    return null;
                }
            },

            addToFavorites: (item) => {
                const store = getStore();
                const isFavorite = store.favorites.some(favorite => favorite.uid === item.uid && favorite.type === item.type);

                if (isFavorite) {
                    const newFavorites = store.favorites.filter(favorite => favorite.uid !== item.uid || favorite.type !== item.type);
                    setStore({ favorites: newFavorites });
                } else {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            removeFromFavorites: (index) => {
                const store = getStore();
                const newFavorites = store.favorites.filter((_, i) => i !== index);
                setStore({ favorites: newFavorites });
            }
        }
    };
};

export default getState;
