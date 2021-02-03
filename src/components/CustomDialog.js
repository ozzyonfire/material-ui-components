import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@material-ui/core';
import Button from './Button';

export default function CustomDialog(props) {
	const {
		open,
		onClose,
		title,
		children,
		actions,
		...other
	} = props;

	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				{children}
			</DialogContent>
			{ actions && 
				<DialogActions>
					{ actions.map((action, index) => {
						const { title, onClick, ...other} = action;
						return <Button key={'button-'+index} onClick={onClick} {...other }>{title}</Button>
					})}
				</DialogActions>
			}
		</Dialog>
	);
}