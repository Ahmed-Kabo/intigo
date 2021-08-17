const initDetail = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initDetail, action) => {
  switch (action.type) {
    case "GAME_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailReducer;
