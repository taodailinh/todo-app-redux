import { createSelector } from "reselect";
// export const todoListSelector = (state) => {
//   const searchTextString = searchText(state);
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchTextString);
//   });
//   return todoRemaining;
// };
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  (todoList, searchText, status) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status !== "All" && status === "Completed"
          ? todo.completed
          : !todo.completed)
      );
    });
  }
);
