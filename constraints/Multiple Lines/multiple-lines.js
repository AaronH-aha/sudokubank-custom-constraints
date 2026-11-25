// Constraint: Multiple Lines
// Rule: Every pair of adjacent digits must have one digit divide evenly into the other.
// SudokuBank use: For each definied group, check each pair of adjacent cells for rule compliance. No group values are used.
// Visual: Various colour lines have been used, no common colour has been settled.
const pairs = input.groups.flatMap(({cells}) => helpers.cells.pairs(cells));

pairs.forEach(pair => constraint.require(
  "integer multiple",
  pair,
  (digitA, digitB) => (
    // Both digits are zero is allowed 0*anything=0
    (digitA === 0 && digitB === 0)
    ||
    (
      // Avoid division by zero
      digitA !== 0 && digitB !== 0 &&
      // Check if either digit divides evenly into the other
      (digitA % digitB === 0 || digitB % digitA === 0)
    )
  )
));