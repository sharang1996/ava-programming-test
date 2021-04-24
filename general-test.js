/* 1)Write a program in a language of your choice to calculate the sum of the first 100 even-valued Fibonacci numbers. */

const sumEvenFibonacci = (n) => {
  let count = 0;
  let a = 0;
  let b = 1;
  let evenFiboSum = 0;
  while (count < n) {
    const sum = a + b;
    if (sum % 2 == 0) {
      evenFiboSum += sum;
      count++;
    }

    a = b;
    b = sum;
  }
  return evenFiboSum;
};
//console.log(sumEvenFibonacci(4));

/* 2)Write a function in a language of your choice which, when passed two sorted arrays of integers returns an array of any numbers which appear in both. No value should appear in the returned array more than once. */

function arrayIntersection(arr1, arr2) {
  let resultSet = new Set();

  let curr1 = (curr2 = 0);
  while (curr1 < arr1.length && curr2 < arr2.length) {
    if (arr1[curr1] === arr2[curr2]) {
      resultSet.add(arr1[curr1]);
      curr1++;
      curr2++;
    } else if (arr1[curr1] < arr2[curr2]) curr1++;
    else curr2++;
  }
  return [...resultSet];
}

//console.log(arrayIntersection([1, 1, 2, 2, 3], [1, 2, 3, 4, 5]));

/* 3)Write a function in a language of your choice which, when passed a positive integer returns true if the decimal representation of that integer contains no odd digits and otherwise returns false. */

function noOddDigits(integer) {
  let num = integer;
  while (num != 0) {
    if ((num % 10) % 2 != 0) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
}

//console.log(noOddDigits(0));

/* 4) Write a function in a language of your choice which, when passed a decimal digit X, returns the value of X+XX+XXX+XXXX. E.g. if the supplied digit is 3 it should return 3702 (3+33+333+3333). */

const transformDigit = (digit) => {
  let res = -1;
  // X+XX+XXX+XXXX = X(1+11+111+1111) = X(1234)
  digit >= 0 && digit <= 9 && (res = digit * 1234);
  return res;
};

//console.log(transformDigit(0));
