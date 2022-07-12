const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state; // Return the current state (not yet updated)
  }
};

export default filtersReducer;
