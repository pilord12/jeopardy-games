import axios from 'axios';
import { gameUrl } from './constants';

/**
 * Function to get the HTML for a single game.
 * @param gameNum the number of the game to get (starting at 1)
 * @return a Promise which will contain the game's HTTP GET response when resolved
 */
export const getGame = async (gameNum) => {
  const url = gameUrl(gameNum);
  return axios.get(url);
};
