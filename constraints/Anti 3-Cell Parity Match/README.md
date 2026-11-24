# Anti 3-Cell Parity Match

No three consecutive cells in any row or column may all contain digits of the same parity. A triple of odd digits or a triple of even digits is not allowed. Pairs of matching parity are allowed, as are triples that contain both odd and even digits.

## SudokuBank use

Use this as a **Whole grid** constraint. It needs no cell groups and no input values. It checks every row and every column; no cells need to be marked.

## Example

- https://tinyurl.com/232nppw7

## Limitations and interactions

The rule applies to consecutive triples in rows and columns only. It does not check diagonals or other directions. It works alongside the puzzle's other constraints, so each digit must satisfy this rule and any other rule affecting its cell.

## Implementation notes

The JavaScript implementation is in `constraint.js`. It uses `constraint.walk` because it checks a sequence and needs to remember the current parity and the length of its matching run. The run length only needs to be tracked up to two: a third matching digit ends that path. The script builds one walk for each row and column that is at least three cells long.
