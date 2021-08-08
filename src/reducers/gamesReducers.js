const initState = {
  popular: [],
  newGame: [],
  upGame: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAME":
      return {
        ...state,
        popular: action.payload.popular,
        newGame : action.payload.newGame,
        upGame: action.payload.upcoming,
        
      };
    default:
      return { ...state };
  }
};
export default gameReducer;
