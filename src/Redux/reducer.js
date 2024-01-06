// src/redux/reducer.js

const initialState = {
    isToggled: false,
  };

  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_STATE':
        return {
          ...state,
          isToggled: !state.isToggled,
        };
      default:
        return state;
    }
  };

 
  
  
  export default reducer
  