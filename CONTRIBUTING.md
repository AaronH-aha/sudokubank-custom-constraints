# Contributing

Thanks for helping build the SudokuBank community constraint collection!

## Adding a constraint

1. Copy `constraints/_template/` into a clearly named folder under `constraints/`.
2. Replace the template example and prompts with the constraint code and documentation.
3. Include the constraint code in a `.js` file. The code should:
   - add comments where they will help a future maintainer understand the reason for a design choice, the assumptions the code relies on, or how an unusual edge case is handled. Avoid comments that only narrate the next line of code;
   - start with a brief header comment describing the rule and how the constraint is used in SudokuBank.
4. Include a short `README.md` explaining:
   - the rule the constraint represents;
   - how to use it in SudokuBank;
   - an example, if practical; and
   - any known limitations or interactions.
5. Open a pull request using the provided template and describe how you checked that it works in SudokuBank.

The header comment should be a quick reference that stays with the code. Use the README for fuller explanation and examples, so the two do not need to repeat each other. Please keep each contribution focused and make the code and explanation understandable to someone who did not write it.

## License

By submitting a constraint, you confirm that you have the right to submit it and agree to its inclusion in the SudokuBank community constraint library under the repository's MIT License. Keep any third-party code clearly identified with its original license and attribution; do not submit code you do not have permission to share.
