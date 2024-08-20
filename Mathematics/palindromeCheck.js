// check number is palindrome or not

function isPal(n) {
  let temp = n;
  let rev = 0;

  while (temp !== 0) {
    let lastDigit = temp % 10;
    rev = rev * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  return rev === n;
}

console.log(isPal(567765));
