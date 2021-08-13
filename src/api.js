//BASE URL
const base_url = "https://api.rawg.io/api/";
const key = "a1fbf2b227b8482b879c34d0f1817f3d";

//GET THE CURRENT MONTH
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//GET CURRENT DATE
const getCurrentDate = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// GET day/moth/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular GAMES
const poplar_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upComing_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const new_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

//------------------------------------------------------------------//
export const popularGamesURL = () => `${base_url}${poplar_games}`;
export const upComingGamesURL = () => `${base_url}${upComing_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

export const gameDetailURL = (game_id) =>
  `${base_url}games/${game_id}?key=${key}`;

//game screenshot

export const gameScreeShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${key}`;
