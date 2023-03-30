const PLAYING = 'playing';
const WINNER = 'winner';
const TIE = 'tie';
const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export { PLAYING, WINNER, TIE, PLAYER_1, PLAYER_2, WINNING_COMBINATIONS };
