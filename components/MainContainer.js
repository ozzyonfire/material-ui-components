import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Head from 'next/head';

const MainContainer = withStyles((theme) => ({
	root: {
		[theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      paddingTop: 75
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 75,
      padding: theme.spacing(2)
    },
    '@media print': {
      paddingTop: 0,
      fontSize: '10px important!'
    }
	}
}))(Container);

export default function Main(props) {
  const { 
    pageTitle = 'Warehouse',
    children,
    ...other
  } = props;
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <MainContainer {...other}>
        {children}
      </MainContainer>
    </React.Fragment>
  )
}