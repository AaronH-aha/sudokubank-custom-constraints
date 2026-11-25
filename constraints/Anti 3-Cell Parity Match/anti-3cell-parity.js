// Constraint: Anti 3-Cell Parity Match
// Rule: no three consecutive cells in any row or column all have the same parity.
// SudokuBank use: This is a whole-grid constraint with no input values.
// Visual: Recommend a global constraint reminder

let {0:evens, 1:odds} = Object.groupBy(helpers.grid.digits, digit => digit % 2);

let lines = [
  ...helpers.grid.rows(),
  ...helpers.grid.columns(),
  // ...helpers.grid.runs([1, 1]), // negative diagonal
  // ...helpers.grid.runs([1, -1]), // positive diagonal
];

let windows = lines.flatMap(line => helpers.cells.windows(line, 3));

windows.forEach(window =>
  constraint.add(new DiverseGroups(window, [evens, odds]))
);
