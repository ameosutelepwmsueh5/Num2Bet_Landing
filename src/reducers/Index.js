const initialState = {
  slideIndex: 0,
};

export const LandingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SLIDE_INDEX":
      return { ...state, slideIndex: action.payload };

    default:
      return state;
  }
};