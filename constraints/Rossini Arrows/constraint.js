// Constraint: Rossini Arrows
// Rule: An arrow outside the grid makes the three cells nearest it along that row or column increase in the arrow's direction.
// SudokuBank use: Create cell groups (one per arrow), drawn over the three edge cells from the smallest to the largest.
// Visual: An arrow drawn outside the grid, pointing towards or away from the grid.

// Create an order-independent key so a group can be matched to an edge triple
// even if its cells are listed in a different order.
const tripleKey = (cells) =>
  [...cells].sort((cellA, cellB) => cellA - cellB).join(",");

// List each row and column's three-cell edge triples, ordered from the edge
// toward the middle of the line.
const edgeTriples = new Map();

for (const line of [...helpers.grid.rows(), ...helpers.grid.columns()]) {
  if (line.length < 3) continue;

  for (const triple of [line.slice(0, 3), line.slice(-3).reverse()]) {
    edgeTriples.set(tripleKey(triple), triple);
  }
}

// Record which edge triples have been marked as arrows by the setter.
const cluedKeys = new Set();

for (const group of input.groups) {
  // Groups shorter than three cells cannot mark an arrow triple.
  if (group.cells.length < 3) continue;

  const key = tripleKey(group.cells);
  const triple = edgeTriples.get(key);

  // An arrow must contain exactly three cells at a line's edge, with the
  // middle cell in the correct position. Keep the setter's order because
  // it determines the direction of the increasing arrow.
  if (
    group.cells.length > 3 ||
    triple === undefined ||
    group.cells[1] !== triple[1]
  ) {
    throw new Error(
      `${helpers.cells.name(group.cells)} must be the three cells in a line next to one edge`,
    );
  }

  cluedKeys.add(key);

  // Use the built-in relationship to make digits increase from the edge inward.
  constraint.add(new LessThan(group.cells[0], group.cells[1]));
  constraint.add(new LessThan(group.cells[1], group.cells[2]));
}

// On every edge without a marked arrow, forbid the digits from being strictly
// increasing or strictly decreasing from the edge inward.
for (const [key, triple] of edgeTriples) {
  if (cluedKeys.has(key)) continue;

  constraint.require(
    "no arrow",
    triple,
    (outerDigit, middleDigit, innerDigit) =>
      !(outerDigit < middleDigit && middleDigit < innerDigit) &&
      !(outerDigit > middleDigit && middleDigit > innerDigit),
  );
}