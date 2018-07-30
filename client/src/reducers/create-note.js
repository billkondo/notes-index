const defaultState = {
  title: "", 
  description: "",
  commentaries: [], 
  tags: []
}

const createNoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default createNoteReducer;