const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "../data/input.txt");
const puzzle = fs.readFileSync(file, "utf-8");

const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const regex = /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g;

const solution = puzzle
  .split("\n")
  .map((line) => {
    const matches = Array.from(line.matchAll(regex), (match) => match[1]);

    const first = isNaN(parseInt(matches[0]))
      ? numbers[matches[0]]
      : matches[0];

    const last = isNaN(parseInt(matches[matches.length - 1]))
      ? numbers[matches[matches.length - 1]]
      : matches[matches.length - 1];

    return parseInt(`${first}${last}`);
  })
  .reduce((sum, value) => sum + value);

console.log(solution); // 53539
