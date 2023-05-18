/* 
Replace With Alphabet Position

Instructions:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/

function alphabetPosition(text) {
  text = text.replace(/\s/g, "");

  let result = "";

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // es una letra mayúscula
      result += charCode - 64 + " ";
    } else if (charCode >= 97 && charCode <= 122) {
      // es una letra minúscula
      result += charCode - 96 + " ";
    }
  }

  return result.trim();
}
