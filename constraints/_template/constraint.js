// Constraint: [name]
// Rule: [describe which digit patterns are allowed]
// SudokuBank use: [describe the marked cells, values, or whole-grid behavior]
// Visual: [describe common visual representations of the constraint]

// This template starts with an example rule: consecutive cells in each group
// must differ. Replace the example below with the intended rule.

// Prefer constraint.add(new Relationship(...)) when a built-in relationship
// expresses the rule. See SudokuBank's Relationships reference.
// Use constraint.require for checks over a few cells, and constraint.walk for
// rules that read a longer sequence while keeping a compact state.

for (const group of input.groups) {
  // Explain assumptions, design choices, and edge cases that a future
  // maintainer may need to understand. Avoid comments that just narrate code.
  for (const [cellA, cellB] of helpers.cells.pairs(group.cells)) {
    constraint.require(
      "different neighbours",
      [cellA, cellB],
      (digitA, digitB) => digitA !== digitB,
    );
  }
}

// Whole-grid constraints can use helpers.grid and input.values. Cell-group
// constraints can use group.cells, group.index, group.values, and input.values.
// Check that the inputs match what the rule expects, and throw an Error with
// a clear message when they do not.
