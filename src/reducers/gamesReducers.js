const initState = {
  pouplar: [],
  newGame: [],
  upGame: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FATCH_GAME":
      return { ...state };
    default:
      return { ...state };
  }
};
export default gameReducer;
