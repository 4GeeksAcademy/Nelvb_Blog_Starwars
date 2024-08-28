const getState = ({ getStore, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {
            loadCharacters: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people');
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error('Error loading people:', error);
                }
            },

            loadVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error('Error loading vehicles:', error);
                }
            },

            loadPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets');
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error('Error loading planets:', error);
                }
            },

            loadCharacterDetails: async (id) => {
                try {
                    const url = `https://www.swapi.tech/api/people/${id}`;
                    console.log('Fetching character details from URL:', url); 
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log('Detalles recibidos:', data); // Verificar estructura
                    const properties = data.result.properties;
                    return { ...properties, uid: id }; // Asegúrate de devolver 'uid' junto con los detalles
                } catch (error) {
                    console.error('Error loading character details:', error);
                    return null;
                }
            },

            loadVehicleDetails: async (id) => {
                try {
                    const url = `https://www.swapi.tech/api/vehicles/${id}`;
                    console.log('Fetching vehicle details from URL:', url); 
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    const properties = data.result.properties;
                    return { ...properties, uid: id }; // Asegúrate de devolver 'uid' junto con los detalles
                } catch (error) {
                    console.error('Error loading vehicle details:', error);
                    return null;
                }
            },

            loadPlanetDetails: async (id) => {
                try {
                    const url = `https://www.swapi.tech/api/planets/${id}`;
                    console.log('Fetching planet details from URL:', url); 
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    const properties = data.result.properties;
                    return { ...properties, uid: id }; // Asegúrate de devolver 'uid' junto con los detalles
                } catch (error) {
                    console.error('Error loading planet details:', error);
                    return null;
                }
            },

            addToFavorites: (item) => {
                const store = getStore();
                const isFavorite = store.favorites.some(favorite => favorite.uid === item.uid && favorite.type === item.type);

                if (isFavorite) {
                    // Elimina el favorito
                    const newFavorites = store.favorites.filter(favorite => favorite.uid !== item.uid || favorite.type !== item.type);
                    setStore({ favorites: newFavorites });
                } else {
                    // Agrega el favorito
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
