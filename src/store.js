export const initialStore = () => {
  return {
    message: null,
    favourites: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo)),
      };
    default:
      throw Error('Unknown action.');
  }
}
