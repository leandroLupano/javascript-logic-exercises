/* 
Roman Numerals Helper

Instructions:
Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
 400 -> "CD"
  90 -> "XC"
  40 -> "XL"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      -> 400
"XC"      -> 90
"XL"      -> 40
"I"       -> 1

Help: Symbol	Value
I   1
IV  4
V   5
X	  10
L	  50
C	  100
D	  500
M	  1000

*/

class RomanNumerals {
  static toRoman(num) {
    let numString = "";
    const numArray = num.toString().split("");
    const lengthNumArray = numArray.length;

    const checkThousands = (valueThousands) => {
      switch (valueThousands) {
        case "1":
          numString += "M";
          break;

        case "2":
          numString += "MM";
          break;

        case "3":
          numString += "MMM";
          break;

        default:
          numString += "MMMM";
          break;
      }
    };

    const checkHundreds = (valueHundreds) => {
      switch (valueHundreds) {
        case "1":
          numString += "C";
          break;

        case "2":
          numString += "CC";
          break;

        case "3":
          numString += "CCC";
          break;

        case "4":
          numString += "CD";
          break;

        case "5":
          numString += "D";
          break;

        case "6":
          numString += "DC";
          break;

        case "7":
          numString += "DCC";
          break;

        case "8":
          numString += "DCCC";
          break;

        case "9":
          numString += "CM";
          break;

        default:
          numString += "";
          break;
      }
    };

    const checkTens = (valueTens) => {
      switch (valueTens) {
        case "1":
          numString += "X";
          break;

        case "2":
          numString += "XX";
          break;

        case "3":
          numString += "XXX";
          break;

        case "4":
          numString += "XL";
          break;

        case "5":
          numString += "L";
          break;

        case "6":
          numString += "LX";
          break;

        case "7":
          numString += "LXX";
          break;

        case "8":
          numString += "LXXX";
          break;

        case "9":
          numString += "XC";
          break;

        default:
          numString += "";
          break;
      }
    };

    const checkUnits = (valueUnits) => {
      switch (valueUnits) {
        case "1":
          numString += "I";
          break;

        case "2":
          numString += "II";
          break;

        case "3":
          numString += "III";
          break;

        case "4":
          numString += "IV";
          break;

        case "5":
          numString += "V";
          break;

        case "6":
          numString += "VI";
          break;

        case "7":
          numString += "VII";
          break;

        case "8":
          numString += "VIII";
          break;

        case "9":
          numString += "IX";
          break;

        default:
          numString += "";
          break;
      }
    };

    switch (lengthNumArray) {
      case 4:
        checkThousands(numArray[0]);
        checkHundreds(numArray[1]);
        checkTens(numArray[2]);
        checkUnits(numArray[3]);
        break;

      case 3:
        checkHundreds(numArray[0]);
        checkTens(numArray[1]);
        checkUnits(numArray[2]);
        break;

      case 2:
        checkTens(numArray[0]);
        checkUnits(numArray[1]);
        break;

      case 1:
        checkUnits(numArray[0]);
        break;
    }

    return numString;
  }

  static fromRoman(str) {
    let numFinal = 0;

    const strArray = str.split("");

    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] === "M") numFinal += 1000;

      if (strArray[i] === "D") numFinal += 500;

      if (
        strArray[i] === "C" &&
        strArray[i + 1] !== "M" &&
        strArray[i + 1] !== "D"
      )
        numFinal += 100;

      if (
        strArray[i] === "C" &&
        (strArray[i + 1] === "M" || strArray[i + 1] === "D")
      ) {
        numFinal -= 100;
      }

      if (strArray[i] === "L") numFinal += 50;

      if (
        strArray[i] === "X" &&
        strArray[i + 1] !== "C" &&
        strArray[i + 1] !== "L"
      )
        numFinal += 10;

      if (
        strArray[i] === "X" &&
        (strArray[i + 1] === "C" || strArray[i + 1] === "L")
      ) {
        numFinal -= 10;
      }

      if (strArray[i] === "V") numFinal += 5;

      if (
        strArray[i] === "I" &&
        strArray[i + 1] !== "X" &&
        strArray[i + 1] !== "V"
      )
        numFinal += 1;

      if (
        strArray[i] === "I" &&
        (strArray[i + 1] === "X" || strArray[i + 1] === "V")
      ) {
        numFinal -= 1;
      }
    }

    return numFinal;
  }
}

console.log(RomanNumerals.toRoman(3542));
console.log(RomanNumerals.toRoman(629));
console.log(RomanNumerals.toRoman(71));
console.log(RomanNumerals.toRoman(4));
console.log(RomanNumerals.toRoman(3001));

console.log(RomanNumerals.fromRoman("MDCLXVI"));
console.log(RomanNumerals.fromRoman("MCMXC"));
console.log(RomanNumerals.fromRoman("XLV"));
console.log(RomanNumerals.fromRoman("MVIII"));
console.log(RomanNumerals.fromRoman("CDXCIX"));
