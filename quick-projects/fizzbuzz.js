const numbers = [...Array(101).keys()];
for (let i = 1; i < numbers.length; i++) {
  const element = numbers[i];
  if (element % 3 == 0 && element % 5 == 0) {
    console.log("fizzbuzz!");
  } else if (element % 3 == 0) {
    console.log("fizz");
  } else if (element % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(element);
  }
}
