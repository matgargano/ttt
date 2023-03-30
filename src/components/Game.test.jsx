import { test, describe, expect } from 'vitest';
import Game from './Game';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('frontend tests', () => {
	test('We have no X on the screen when we start', async () => {
		render(<Game />);
		const element = screen.queryAllByText(`X`);

		assert.strictEqual(element.length, 0);
	});

	test('We have no (letter) O on the screen when we start', async () => {
		render(<Game />);
		const element = screen.queryAllByText(`O`);

		assert.strictEqual(element.length, 0);
	});

	test('We have 9 zeroes on the screen when we start', async () => {
		render(<Game />);
		const element = screen.queryAllByText(`0`);
		assert.strictEqual(element.length, 9);
	});

	test('The first click turns an element to an X', async () => {
		render(<Game />);
		const tdElements = screen.getByRole('table').querySelectorAll('td');
		const firstCell = tdElements[0];
		await userEvent.click(firstCell);
		assert.strictEqual(firstCell.textContent, 'X');
	});

	test('The second (different) click turns an element to an O', async () => {
		render(<Game />);
		const tdElements = screen.getByRole('table').querySelectorAll('td');
		const firstCell = tdElements[0];
		await userEvent.click(firstCell);
		const secondCell = tdElements[1];
		await userEvent.click(secondCell);
		assert.strictEqual(secondCell.textContent, 'O');
	});
});
