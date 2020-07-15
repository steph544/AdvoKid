const initialState = {
    users: [],
    selectedUser: ''
  };
  
  function userReducer(state=initialState, action) {
    switch(action.type) {
      case 'SELECT_USER':
        return {
          ...state,
          selectedUser: action.user
        };
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.user]
        };
      default:
        return state;
    }
  }
  
  export default userReducer;
  