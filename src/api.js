//BASE URL
const base_url = "https://api.rawg.io/api/";

//GET THE CURRENT MONTH 
const getCurrentMonth = () => {
    month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month
    }
    console.log(month)
}

//GET CURRENT DATE 
const getCurrentDate = () => {
    const day = new Date().getDay();
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

// GET day/moth/year
const currentYear = new Date().getFullYear();
const currentMotn = getCurrentMonth();
const currentDay  = getCurrentDate();
const currentDate = `${currentYear}-${currentMotn}-${currentDay}`;
const lastYear    = `${currentYear - 1}-${currentMotn}-${currentDay}`;
const nextYear    = `${currentYear + 1}-${currentMotn}-${currentDay}`;

//popular GAMES 
const poplar_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`

//final url 

export const popularGamesURL = () =>  `${base_url}${poplar_games}`

