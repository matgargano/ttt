import { WINNING_COMBINATIONS } from './constants';

const checkForWinner = (selectionsClone) => {
	for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
		const [a, b, c] = WINNING_COMBINATIONS[i];
		if (
			selectionsClone[a] &&
			selectionsClone[a] === selectionsClone[b] &&
			selectionsClone[b] === selectionsClone[c]
		) {
			return true;
		}
	}
	return false;
};

const checkForTie = (selectionsClone) => {
	return selectionsClone.every((c) => c !== 0);
};

export { checkForWinner, checkForTie };
