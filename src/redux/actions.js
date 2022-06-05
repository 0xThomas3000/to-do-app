/* Better use action creators than this one */
// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: {id: 5, name: "Learn Footbal", completed: false, priority: "Medium"}
// };

/* Action creator */
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
