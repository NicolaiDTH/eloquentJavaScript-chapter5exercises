function countChar (string, ch) {
  var counted = 0;
  for (var n = 0; n < string.length; n++)
    if (string.charAt(n) == ch)
      counted += 1;
  return counted;
}

function countBs (string) {
  return countChar(string, "B");
}
console.log(countBs("BBQ"));
// → 2
console.log(countChar("mississipi", "s"));
// → 4