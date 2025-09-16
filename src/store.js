export const actionTypes = {
  getCharacters: 'GET_CHARACTERS',
  getPlanets: 'GET_PLANETS',
  getVehicles: 'GET_VEHICLES',
  addToFav: 'ADD_TO_FAV',
  deleteFav: 'DELETE_FAV',
};

export const initialStore = () => {
  return {
    message: null,
    favourites: [],
    characters: [],
    planets: [],
    vehicles: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case actionTypes.getCharacters:
      return {
        ...store,
        characters: action.payload,
      };
    case actionTypes.getPlanets:
      return {
        ...store,
        planets: action.payload,
      };
    case actionTypes.getVehicles:
      return {
        ...store,
        vehicles: action.payload,
      };

    case actionTypes.addToFav:
      if (!store.favourites.includes(action.payload)) {
        return {
          ...store,
          favourites: [...store.favourites, action.payload],
        };
      } else {
        return store;
      }

    case actionTypes.deleteFav:
      const updatedFavArray = store.favourites.filter((fav) => fav !== action.payload);
      return {
        ...store,
        favourites: updatedFavArray,
      };

    default:
      throw Error('Unknown action.');
  }
}
