const initState = [
  { id: 1, name: "Learn Java", completed: false, priority: "Low" },
  { id: 2, name: "Learn Javascript", completed: true, priority: "Medium" },
];
const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default todoListReducer;
