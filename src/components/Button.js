import React from 'react';
import {
	Button,
	CircularProgress
} from '@material-ui/core';

export default function LoadingButton(props) {
	const {
		spinnerColor = 'primary',
		loading,
		spinnerProps,
		children,
		...other
	} = props;
	return (
		<Button { ...other } >
			{ loading === true ?
				<CircularProgress size={20} color={spinnerColor} {...spinnerProps} /> : children
			}
		</Button>
	);
}