const fs = require("fs");

const file = "./input.txt";
const puzzle = fs.readFileSync(file, "utf-8");
const head = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  oneight: "1",
  twone: "2",
  twoneight: "2",
};

const tail = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  oneight: "8",
  twone: "1",
  twoneight: "8",
};

const solution = puzzle
  .split("\n")
  .map((line) => {
    const regex =
      /[0-9]|twoneight|oneight|twone|one|two|three|four|five|six|seven|eight|nine/g;
    const digits = line.match(regex);
    const first = digits[0];
    const last = digits[digits.length - 1];
    const result = parseInt(head[first] + tail[last]);
    console.log(line, digits, result);
    return result;
  })
  .reduce((prev, current) => prev + current);

console.log(solution); // 53599
