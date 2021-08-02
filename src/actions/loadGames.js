import axios from "axios";
import { popularGamesURL } from "../api";

const loadGames = () => async (dispatch)=> {
    const popularData = await axios.get(popularGamesURL());
    dispatch({
        type : "FATCH_GAME",
        paylode : {
            popular : popularData.data
        }
    })
}