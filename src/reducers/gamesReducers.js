const initState = {
  popular: [],
  newGame: [],
  upGame: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FATCH_GAME":
      return { ...state, popular : action.paylode.popular };
    default:
      return { ...state };
  }
};
export default gameReducer;
