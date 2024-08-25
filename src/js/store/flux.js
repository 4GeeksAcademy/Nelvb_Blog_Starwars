const getState = ({ getStore, setStore }) => {
    return {
        store: {
            people: [], // Cambiado de 'characters' a 'people'
            vehicles: [],
            planets: [],
            favorites: [],
            selectedItem: null
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

            loadDetails: async (type, id) => {
                try {
                    const url = `https://www.swapi.tech/api/${type}/${id}`;
                    console.log('Fetching details from URL:', url); 
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
