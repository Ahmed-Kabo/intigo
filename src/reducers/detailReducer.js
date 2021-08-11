const initDetail = {
  game: {},
  screen: {},
};

const detailReducer = (state = initDetail, action) => {
  switch (action.type) {
    case "GAME_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
