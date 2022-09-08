const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

// Implement a logic that finds difference between "first" and "secord" lists
// and prints the result to the console:
// [1, 2, 4]

function getDifferentEl(first, second) {
  let arr = [];

  for (let number1 of first) {
    if (!second.includes(number1)) {
      arr.push(number1);
    }
  }
  for (let number2 of second) {
    if (!first.includes(number2)) {
      arr.push(number2);
    }
  }
  const result = arr.filter((el, id) => arr.indexOf(el) === id);
  const sortRes = [...result].sort((a, b) => a - b);

  console.log(sortRes);
}

getDifferentEl(first, second);