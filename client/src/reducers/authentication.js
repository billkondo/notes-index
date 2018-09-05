const defaultState = {
  user: {},
  isAuthenticated: false
};

const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default authenticationReducer;