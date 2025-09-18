export const actionTypes = {
  getCharacters: 'GET_CHARACTERS',
  getPlanets: 'GET_PLANETS',
  getVehicles: 'GET_VEHICLES',
  addToFav: 'ADD_TO_FAV',
  deleteFav: 'DELETE_FAV',
};

export const initialStore = () => {
  return {
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

    // add item for favourites array
    case actionTypes.addToFav:
      const favNamesArr = [];
      for (const favObj of store.favourites) {
        favNamesArr.push(favObj.name);
      }

      console.log('FAV NAMES ARR: ', favNamesArr);
      if (!favNamesArr.includes(action.payload.name)) {
        return {
          ...store,
          favourites: [
            ...store.favourites,
            { name: action.payload.name, isFavFunction: action.payload.setIsFavourite },
          ],
        };
      } else {
        return store;
      }

    // delete item from favourites array
    case actionTypes.deleteFav:
      const updatedFavArray = store.favourites.filter(({ name }) => name !== action.payload);
      return {
        ...store,
        favourites: updatedFavArray,
      };

    default:
      throw Error('Unknown action.');
  }
}
