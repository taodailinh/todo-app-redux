const initState = [
  { id: 1, name: "Learn Java", completed: false, priority: "Low" },
  { id: 2, name: "Learn Javascript", completed: true, priority: "Medium" },
];
const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleCompleteTodo":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};
export default todoListReducer;
