import { createSelector } from "reselect";

// export const todoListSelector = (state) =>
//   state.todoList.filter((todo) =>
//     todo.name.toLowerCase().includes(state.filters.search.toLowerCase())
//   );

// export const searchTextSelector = (state) => state.filters.search;

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    if (searchText === undefined) return todoList;
    else
      return todoList.filter((todo) =>
        todo.name.toLowerCase().includes(searchText.toLowerCase())
      );
  }
);
