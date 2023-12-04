import * as fs from "fs";

const data = fs.readFileSync("./input.txt", "utf-8");

const wordList = data.split(/\r|,/);

let prvi = 0;
let drugi = 0;

let sum = 0;

for (let i = 0; i < wordList.length; i++) {
  let word = wordList[i];

  for (let j = 1; j < word.length; j++) {
    if (word[j].charCodeAt(0) >= 48 && word[j].charCodeAt(0) <= 57) {
      if (prvi == 0) {
        prvi = parseInt(word[j], 10);
        continue;
      }

      if (prvi != 0) {
        drugi = parseInt(word[j], 10);
      }
    }
  }
  if (drugi == 0) drugi = prvi;

  sum += prvi * 10 + drugi;

  prvi = 0;
  drugi = 0;
}

console.log(sum);
