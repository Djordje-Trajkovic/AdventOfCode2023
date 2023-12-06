import * as fs from "fs";

const data = fs.readFileSync("./input_1.txt", "utf-8");

const wordList = data.split(/\r|,/);

let first = 0;
let second = 0;

let sum = 0;

for (let i = 0; i < wordList.length; i++) {
  let word = wordList[i];

  for (let j = 1; j < word.length; j++) {
    if (word[j].charCodeAt(0) >= 48 && word[j].charCodeAt(0) <= 57) {
      if (first == 0) {
        first = parseInt(word[j], 10);
        continue;
      }

      if (first != 0) {
        second = parseInt(word[j], 10);
      }
    }
  }
  if (second == 0) second = first;

  sum += first * 10 + second;

  first = 0;
  second = 0;
}

console.log(sum);