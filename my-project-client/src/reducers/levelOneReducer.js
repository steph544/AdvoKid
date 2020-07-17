const initialState = {
    comp: "video"
  };

  function levelOneReducer(state=initialState, action) {
    switch(action.type) {
      case 'SELECT_COMP':
        return {
          ...state,
          comp: action.comp
        };
      default:
        return state;
    }
  }
  
  export default levelOneReducer;