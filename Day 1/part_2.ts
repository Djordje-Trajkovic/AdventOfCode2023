import * as fs from "fs";

const data = fs.readFileSync("./input_2.txt", "utf-8");

const wordList = data.split(/\r|,/);

let first = 0;
let second = 0;

let sum = 0;

const numbersArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// for (let i = 0; i < wordList.length; i++) {
//   let word = wordList[i];
//   console.log(word);

//   for (let j = 0; j <= word.length; j++) {
//     for (let k = 0; k < numbersArray.length; k++) {
//       if (word.slice(0, j).indexOf(numbersArray[k]) != -1) {
//         wordList[i] = word.replace(numbersArray[k], (k + 1).toString(10));
//         word = wordList[i];
//         j = 0;
//         k = 0;
//         continue;
//       }
//     }
//   }

//   console.log(i,word);
// }

for (let i = 0; i < wordList.length; i++) {
  let word = wordList[i];
  //   console.log(word);

  for (let j = 0; j < word.length; j++) {
    if (word[j].charCodeAt(0) >= 48 && word[j].charCodeAt(0) <= 57) {
      if (first == 0) {
        first = parseInt(word[j], 10);
        continue;
      }

      if (first != 0) {
        second = parseInt(word[j], 10);
      }
    } else {
      for (let k = 0; k < numbersArray.length; k++) {
        let number = numbersArray[k];
        if (word[j] == number[0]) {
          for (let l = 1; l < number.length; l++) {}
        } else continue;
      }
    }
  }
  if (second == 0) second = first;

  //   console.log(sum);

  sum += first * 10 + second;

  console.log(i + 1, first * 10 + second, sum - (first * 10 + second), sum);

  first = 0;
  second = 0;
}

console.log(sum);
