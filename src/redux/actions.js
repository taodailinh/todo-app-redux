export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const togggleCompleteTodo = (id) => {
  return {
    type: "todoList/toggleCompleteTodo",
    payload: id,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
