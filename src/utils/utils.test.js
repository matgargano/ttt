import { checkForTie, checkForWinner } from './utils';

describe('Testing checkForTie', () => {
	test('Test for tie, returns true when there is a tie', () => {
		const selections = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
		expect(checkForTie(selections)).toBe(true);
	});
	test('Test for not a tie, returns false when there is not a tie', () => {
		const selections = ['X', 'X', 'X', 0, 0, 0, 0, 0, 0];
		expect(checkForTie(selections)).toBe(false);
	});
});
describe('Testing checkForWinner', () => {
	test('Test for winner, returns true when there is a winner', () => {
		const selections = ['X', 'X', 'X', 0, 0, 0, 0, 0, 0];
		expect(checkForWinner(selections)).toBe(true);
	});

	test('Test for winner, returns false when there is a tie', () => {
		const selections = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
		expect(checkForWinner(selections)).toBe(false);
	});
});
