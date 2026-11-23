# Multiple Lines

Every pair of consecutive digits along a line must have one digit divide evenly into the other. For example, 2 and 6 are allowed; 2 and 5 are not.

## SudokuBank use

Use **Cell groups** and place the cells of each line in order. The rule applies to consecutive cells in each group; it does not compare every pair in the group. Group values are not used. There is no settled line colour convention for this constraint.

## Example

- https://sudokubank.com/puzzles/940917bd-04c4-48c7-92af-f115f1c04026
- https://sudokubank.com/puzzles/c903f041-0e9b-498c-ab18-ea463e2ffffe

## Limitations and interactions

Groups with fewer than two cells create no pair to check.

## Implementation notes

The JavaScript implementation is in `multiple-lines.js`. It uses `constraint.require` because each check concerns a pair of adjacent cells. The code checks both divisibility directions and requires positive digits to avoid division by zero.
