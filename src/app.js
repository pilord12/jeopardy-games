import cheerio from 'cheerio';
import { getGame } from './backend/api/games';

// Just get the first game for now so we can test we're doing something
getGame(1).then((response) => {
  const $ = cheerio.load(response.data);
  const firstRound = $('div#jeopardy_round');
  const firstRoundTable = $('table.round > tbody > tr:nth-child(2) > td.clue:nth-child(1) > table > tbody > tr:nth-child(1) > td > div', firstRound);
  console.log($(firstRoundTable[0]).attr('onmouseover'));
  console.log($(firstRoundTable[0]).attr('onmouseout'));
});
