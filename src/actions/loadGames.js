import axios from "axios";
import { popularGamesURL, upComingGamesURL, newGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upComingData = await axios.get(upComingGamesURL());
  const newData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAME",
    payload: {
      popular: popularData.data.results,
      upcoming: upComingData.data.results,
      newGame: newData.data.results,
    },
  });
};
