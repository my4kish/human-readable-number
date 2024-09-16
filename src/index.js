numWord = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}

module.exports = function toReadable (number) {
  if (number in numWord) return numWord[number];

  let word = '';

  if (number >= 100) {
    word += numWord[Math.floor(number / 100)] + ' hundred';
    number %= 100;
    if (number > 0) {
      word += " "
    }
  }

  if (number > 0) {
    if(number in numWord) {
      word += numWord[number]
      number = 0;
    } else {
      word += numWord[Math.floor(number / 10) * 10];
      number %= 10;
    }
  }

  if (number > 0) {
    word += " " + numWord[number];
  }

  return word;
}
