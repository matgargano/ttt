const Row = ({ selections, choose, cells }) => {
	return (
		<tr>
			{cells.map((cell) => {
				return (
					<td key={cell} onClick={() => choose(cell)}>
						<div>{selections[cell]}</div>
					</td>
				);
			})}
		</tr>
	);
};

export default Row;
