// count the digits in a number

function countDigit(n) {
  let res = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    res++;
  }
  return res;
}

console.log(countDigit(4537));
