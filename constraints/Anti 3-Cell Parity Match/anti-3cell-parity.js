// Constraint: Anti 3-Cell Parity Match
// Rule: no three consecutive cells in any row or column all have the same parity.
// SudokuBank use: This is a whole-grid constraint with no input values.
// Visual: Recommend a global constraint reminder

const lines = [...helpers.grid.rows(), ...helpers.grid.columns()];

for (const line of lines) {
  // Shorter lines cannot contain a run of three matching parities.
  if (line.length < 3) continue;

  constraint.walk("no parity run of three", line, {
    // Track the previous digit's parity and the current run length.
    start: [],
    step: (state, digit) => {
      const parity = digit % 2;
      // A parity change starts a new run.
      if (state.length === 0 || state[0] !== parity) return [parity, 1];

      // Stop this path if the new digit would make a run of three.
      // Otherwise, keep the run length capped at two.
      return state[1] === 2 ? null : [parity, 2];
    },
    
    // Any path that reaches the end has avoided a run of three.
    accept: () => true,
  });
}