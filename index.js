import Match3Board from './src/models/Match3Board.js';

import getUserInput from './src/utils/getUserInput.js';

const board = new Match3Board([
  [1,2],
  [2,1,3,3,2,3,2],
  [1,2],
]);

// const ans = await getUserInput('Are you sure you want to deploy to PRODUCTION? ');
board.print();
