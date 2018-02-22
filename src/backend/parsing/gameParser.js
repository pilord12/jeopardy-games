import cheerio from 'cheerio';

// Regex to match the title of a show
const TITLE_STRING_REGEX = /Show #(\d+) - (.*)/;

// Selector constants for parsing HTML
const BASE_CONTENT = 'div#content';
const TITLE_HEADER = BASE_CONTENT + ' > div#game_title > h1';

/**
 * Parses an HTML page for a single game into date, game number, questions/answers, etc.
 * @param gameHtml the HTML content of the entire page
 * @return an object with relevant game information
 */
export const parseGame = (gameHtml) => {
  const $ = cheerio.load(gameHtml);
  const titleString = $(TITLE_HEADER).text();

  const titleObj = parseTitleString(titleString);

  return {
    ...titleObj,
  };
};

/**
 * Parses a title string of the titleStringRegex format into a show number and date
 * @param titleString the string to match against
 * @return an object of the form { showNumber, showDate }
 */
const parseTitleString = (titleString) => {
  const matches = titleString.match(TITLE_STRING_REGEX);

  if (matches.length <= 2) {
    console.warn('Failed title string match for ' + titleString);
    return {};
  }

  const showNumber = matches[1];
  const showDate = Date.parse(matches[2]);

  return {
    showNumber,
    showDate,
  };
};
