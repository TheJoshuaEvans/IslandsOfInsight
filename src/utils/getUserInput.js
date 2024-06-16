import readline from 'readline';

/**
 * Get user input by asking them a question. The user presses "enter" to submit their response
 *
 * @param {*} query
 * @returns
 */
function getUserInput(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    });
  });
}

export default getUserInput;
