import { readFileSync } from "fs";

const file = readFileSync(__dirname + "/a.txt", "utf8");
const elves = file.split("\n\n");
const totals = elves.map((elfText) => {
  const numbers = elfText.split("\n").map((line) => parseInt(line.trim()));
  const total = numbers.reduce((acc, num) => acc + num, 0);
  return total;
});
const sortedTotals = totals.sort((a, b) => b - a);
const max = sortedTotals[0];
console.log("Part 1:", max);

const maxThree = sortedTotals.slice(0, 3);
const maxThreeTotal = maxThree.reduce((acc, num) => acc + num, 0);
console.log("Part 2", maxThreeTotal);
