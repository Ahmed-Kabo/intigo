import { combineReducers } from "redux";
import gameReducer from "./gamesReducers";

const rootReducer = combineReducers({
  games: gameReducer,
  
});

export default rootReducer;
