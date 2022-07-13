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
export const prioritiesStatusSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  prioritiesStatusSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
