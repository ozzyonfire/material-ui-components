import Reast, { useState, useEffect } from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import {
	Snackbar
} from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Toast(props) {
	const {
		message,
		autoHideDuration = 3000,
		severity,
		...other
	} = props;

	return(
		<Snackbar autoHideDuration={autoHideDuration} {...other} >
	    <Alert severity={severity}>
	      {message}
	    </Alert>
	  </Snackbar>
	);
}

export default Toast;