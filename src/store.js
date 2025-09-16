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
    case 'GET_CHARACTERS':
      return {
        ...store,
        characters: action.payload,
      };
    case 'GET_PLANETS':
      return {
        ...store,
        planets: action.payload,
      };
    case 'GET_VEHICLES':
      return {
        ...store,
        vehicles: action.payload,
      };
    default:
      throw Error('Unknown action.');
  }
}
