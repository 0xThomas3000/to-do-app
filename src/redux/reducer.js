const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "Low" },
    { id: 3, name: "Learn Javascript", completed: false, priority: "High" },
  ],
};

const rootReducer = (state = initState, action) => {
  // console.log({ state, action });
  /*
      {
        type: "todoList/addTodo",
        payload: {id: 5, name: "Learn Footbal", completed: false, priority: "Medium"}
      }
  */
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state; // Return the current state (not yet updated)
  }
};

export default rootReducer;
