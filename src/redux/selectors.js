export const todoListSelector = (state) =>
  state.todoList.filter((todo) =>
    todo.name.toLowerCase().includes(state.filters.search.toLowerCase())
  );

export const searchTextSelector = (state) => state.filters.search;
