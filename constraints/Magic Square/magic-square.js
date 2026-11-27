// Constraint: Magic Square ✨
// Rule: In each marked 3x3 square, every row, column, and diagonal has the same sum.
// SudokuBank use: Add one Cell group containing only the square's centre cell.
// Input values are not used.

for (const group of input.groups) {
  if (group.cells.length !== 1) {
    throw new Error(`Group ${group.index + 1} must contain exactly one centre cell`);
  }

  const [centre] = group.cells;
  if (helpers.cells.neighbours(centre, "king").length !== 8) {
    throw new Error(
      `The centre cell ${helpers.cells.name([centre])} must have eight surrounding cells`,
    );
  }

  // Build the square by position so rows, columns, and diagonals are ordered explicitly.
  const square = [-1, 0, 1].map((rowOffset) =>
    [-1, 0, 1].map((columnOffset) =>
      helpers.cells.offset(centre, rowOffset, columnOffset),
    ),
  );

  const [top, middle, bottom] = square;
  const columns = [
    [top[0], middle[0], bottom[0]],
    [top[1], middle[1], bottom[1]],
    [top[2], middle[2], bottom[2]],
  ];

  // A normal Sudoku magic square uses each of its nine digits only once.
  constraint.add(new AllDifferent(square.flat()));

  // Each SameSum call contains disjoint cell groups. Since both line sets
  // cover all nine cells, the common row sum and column sum must be equal.
  constraint.add(new SameSum(square));
  constraint.add(new SameSum(columns));

  // The diagonals and middle row all contain the centre cell. Removing it
  // leaves three disjoint pairs whose sums must match, so the original lines
  // also have the same sum when the centre is added back.
  constraint.add(
    new SameSum([
      [top[0], bottom[2]],
      [top[2], bottom[0]],
      [middle[0], middle[2]],
    ]),
  );
}
