const initState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Java", completed: false, priority: "Low" },
    { id: 2, name: "Learn Javascript", completed: true, priority: "Medium" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;
