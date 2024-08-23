const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
            selectedItem: null // Añadimos un estado para almacenar el item seleccionado
        },
        actions: {
            loadCharacters: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people');
                    const data = await response.json();
                    setStore({ characters: data.results });
                } catch (error) {
                    console.error('Error loading characters:', error);
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

            loadDetails: async (type, id) => {
                try {
                    // Usa el 'type' tal cual, asumiendo que ya está en plural en todos los casos
                    const url = `https://www.swapi.tech/api/${type}/${id}`;
                    console.log('Fetching details from URL:', url); // Verifica que la URL sea correcta
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
            
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        const data = await response.json();
                        return data.result.properties;
                    } else {
                        throw new Error("Received non-JSON response");
                    }
                } catch (error) {
                    console.error('Error loading details:', error);
                    return null;
                }
            },

            addToFavorites: (item) => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, item] });
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
