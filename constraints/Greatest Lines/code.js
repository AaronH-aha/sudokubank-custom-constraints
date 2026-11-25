// lines must be 3-cells long minimum
let index = input.groups.findIndex(({cells}) => cells.length < 3);
if (index != -1) {
  throw new Error(`Group ${index} must have at least 3 cells!`);
}

input.groups.forEach(({cells}) =>
  constraint.walk("greatest line", cells, {
    // state is an array of up to 3 largest digits seen so far
    start: [],
    step: (abc, digit) => [...abc, digit].sort().slice(-3),
    accept: ([a, b, c]) => a + b < c,
  })
);
