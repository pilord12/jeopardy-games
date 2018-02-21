// Base URL for getting a game's HTML info
const baseGameUrl = 'http://www.j-archive.com/showgame.php?game_id=';

/**
 * URL builder for a specific game.
 * @param gameNum the number of the game to get
 * @return the full URL to request a game's HTML
 */
export const gameUrl = (gameNum) => baseGameUrl + gameNum;
