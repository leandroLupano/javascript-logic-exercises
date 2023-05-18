/* 
Split Strings

Instructions:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str) {
  const stringToArray = str.split("");

  if (stringToArray.length % 2 !== 0) stringToArray.push("_");

  let resultArray = [];

  for (let i = 0; i < stringToArray.length; i += 2) {
    let stringToPush = stringToArray[i] + stringToArray[i + 1];

    resultArray.push(stringToPush);
  }

  return resultArray;
}
