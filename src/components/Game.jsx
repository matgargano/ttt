import { useState } from 'react';
import Row from './Row';
import './Game.css';
import { PLAYING, TIE, WINNER, PLAYER_1, PLAYER_2 } from '../utils/constants';
import { checkForTie, checkForWinner } from '../utils/utils';

const Game = () => {
	const defaults = {
		turn: PLAYER_1,
		selections: Array(9).fill(0),
		status: PLAYING,
	};

	const [turn, setTurn] = useState(defaults.turn);
	const [selections, setSelections] = useState(defaults.selections);
	const [status, setStatus] = useState(defaults.status);

	const reset = () => {
		setTurn(defaults.turn);
		setSelections(defaults.selections);
		setStatus(defaults.status);
	};

	const choose = (i) => {
		if (parseInt(selections[i]) !== 0 || status !== PLAYING) {
			return;
		}

		const selectionsClone = [...selections];
		selectionsClone[i] = turn;
		setSelections(selectionsClone);

		const winner = checkForWinner(selectionsClone);
		if (winner) {
			setStatus(WINNER);
			return;
		}

		if (checkForTie(selectionsClone)) {
			setStatus(TIE);
			return;
		}

		let nextTurn = '';
		if (turn === PLAYER_1) {
			nextTurn = PLAYER_2;
		} else {
			nextTurn = PLAYER_1;
		}
		setTurn(nextTurn);
	};

	return (
		<>
			<pre>{JSON.stringify(selections)}</pre>
			<table>
				<thead>
					<tr>
						<th colSpan={3}>
							{status === TIE && <>Tie!</>}
							{status === PLAYING && <>{turn}&apos;s Turn</>}
							{status === WINNER && <>Winner is {turn}</>}
						</th>
					</tr>
				</thead>
				<tbody>
					<Row selections={selections} choose={choose} cells={[0, 1, 2]} />
					<Row selections={selections} choose={choose} cells={[3, 4, 5]} />
					<Row selections={selections} choose={choose} cells={[6, 7, 8]} />
				</tbody>
			</table>
			<button onClick={reset}>Reset</button>
		</>
	);
};

export default Game;
