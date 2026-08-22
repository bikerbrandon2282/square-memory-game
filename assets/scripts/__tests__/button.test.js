/**
 * @jest-environment jsdom
 */

const {newGame} = require('../scripts/button.js');

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.body.innerHTML = fileContents;
});
  test('The New Game button exists and can be clicked', () => {
    const newGameButton = document.querySelector('.button[onclick="newGame()"]');
    expect(newGameButton).not.toBeNull();

    // You can simulate a click if you've got click handlers:
    newGameButton.click();

    // Then you'd assert the behavior after a click
  });
