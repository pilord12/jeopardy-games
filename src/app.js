import { getGame } from './backend/api/games';
import { parseGame } from './backend/parsing/gameParser';

// Just get the first game for now so we can test we're doing something
getGame(1).then((response) => {
  console.log(parseGame(response.data));
});
