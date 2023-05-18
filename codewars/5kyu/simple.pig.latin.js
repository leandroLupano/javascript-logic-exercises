/* 
Simple Pig Latin

Instructions:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str) {
  const words = str.split(" ");
  const pigWords = words.map((word) => {
    if (/[a-zA-Z]/.test(word)) {
      const firstChar = word.charAt(0);
      const restWord = word.slice(1);
      return `${restWord}${firstChar}ay`;
    } else {
      return word;
    }
  });
  return pigWords.join(" ");
}
