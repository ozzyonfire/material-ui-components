import React, { useState } from 'react';
import {
	Table,
	TableContainer,
	TableRow,
	TableCell,
	TableBody,
	TableHead,
	TableSortLabel,
	Paper
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	table: {
		'@media print': {
			fontSize: 10
		}
	}
}));

export default function CustomTable(props) {
	const { 
		headers, 
		sortHeaders, 
		rows, 
		style, 
		hover, 
		alignHeader, 
		...other 
	} = props;
	const classes = useStyles();
	const [orderBy, setOrderBy] = useState(null);
	const [direction, setDirection] = useState('asc');

	function descendingComparator(a, b) {
	  if (b < a) {
	    return -1;
	  }
	  if (b > a) {
	    return 1;
	  }
	  return 0;
	}

	let sortedRows = rows;
	if (orderBy !== null) {
		const comparatorFunction = sortHeaders[orderBy].comparator 
			? sortHeaders[orderBy].comparator 
			: descendingComparator;
		sortedRows = direction === 'desc'
			? sortedRows.sort((a, b) => comparatorFunction(a.values[orderBy], b.values[orderBy]))
			: sortedRows.sort((a, b) => -comparatorFunction(a.values[orderBy], b.values[orderBy]));
	}

	return (
		<TableContainer component={Paper} style={style} className={classes.table}>
			<Table {...other} className={classes.table}>
				{ headers &&
					<TableHead>
						<TableRow>
							{ headers.map((header, index) => 
								<TableCell 
									className={classes.table}
									key={header} 
									align={alignHeader && alignHeader[index] || 'left'}
								>
									{header}
								</TableCell>
							)}
						</TableRow>
					</TableHead>
				}
				{ sortHeaders && 
					<TableHead>
						<TableRow>
							{ sortHeaders.map((header, index) =>
								<TableCell className={classes.table}
									key={index}
									align={alignHeader && alignHeader[index] || 'left'}
								>
									<TableSortLabel
										active={orderBy === index}
										direction={direction}
										onClick={e => {
											setDirection(direction == 'asc' ? 'desc' : 'asc');
											setOrderBy(index);
										}}
									>
										{header.label}
									</TableSortLabel>
								</TableCell>
							)}
						</TableRow>
					</TableHead>
				}
				<TableBody>
					{ sortedRows && sortedRows.map((row, index) => 
						<TableRow {...row.props} key={'row-'+index}>
							{ row.cells.map((cell, cellIndex) =>
								<TableCell 
									className={classes.table}
									key={'cell-'+index+'-'+cellIndex}
									align={alignHeader && alignHeader[cellIndex] || 'left'}
								>
									{cell}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}