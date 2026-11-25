# Anti 3-Cell Parity Match

No three consecutive cells in any row or column may all contain digits of the same parity. A triple of odd digits or a triple of even digits is not allowed. Pairs of matching parity are allowed, as are triples that contain both odd and even digits.

## SudokuBank use

Use this as a **Whole grid** constraint. It needs no cell groups and no input values. It checks every row and every column; no cells need to be marked.

## Example

- https://tinyurl.com/4xpfybvr

## Limitations and interactions

The rule applies to consecutive triples in rows and columns (diagonals are commented out; uncomment to enable them).

## Implementation notes

Code adds one `DiverseGroup` of evens and odds on each triple.
