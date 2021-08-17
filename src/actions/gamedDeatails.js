import axios from "axios";
import { gameDetailURL, gameScreeShotURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const deatailsGameData = await axios.get(gameDetailURL(id));
  const screenshotGameData = await axios.get(gameScreeShotURL(id));
  dispatch({
    type: "GAME_DETAIL",
    payload: {
      game: deatailsGameData.data,
      screen: screenshotGameData.data,
    },
  });
};
