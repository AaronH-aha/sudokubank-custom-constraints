// Constraint: Multiple Lines
// Rule: Every pair of adjacent digits must have one digit divide evenly into the other.
// SudokuBank use: For each definied group, check each pair of adjacent cells for rule compliance. No group values are used.
// Visual: Various colour lines have been used, no common colour has been settled.

for (const group of input.groups) {
  for (const [cellA, cellB] of helpers.cells.pairs(group.cells)) {
    constraint.require(
      "integer multiple",
      [cellA, cellB],
      (digitA, digitB) =>
        // Avoid division by zero
        digitA > 0 && digitB > 0
        // Check if either digit divides evenly into the other
        && (digitA % digitB === 0 || digitB % digitA === 0)
    );
  }
}