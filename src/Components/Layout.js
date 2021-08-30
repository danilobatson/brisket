import React from 'react';
import { makeStyles, AppBar, Toolbar, Link, Container } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Temperature from './Temperature';
import App from '../App';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
	return {
		page: {
			width: '100%',
			padding: theme.spacing(3),
		},
		root: {
			display: 'flex',
			padding: 20,
			alignItems: 'center',
			marginLeft: drawerWidth,
      justifyContent: 'space-between',
			maxWidth: `calc(100% - ${drawerWidth}px)`,
		},
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			width: drawerWidth,
		},

		title: {
			padding: theme.spacing(2),
		},
		appBar: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		date: {
			flexGrow: 1,
		},
		toolbar: theme.mixins.toolbar,
	};
});

export default function Layout({ children }) {
	const classes = useStyles();

	return (
		<Container>
			<AppBar elevation={1} className={classes.appbar}>
				<Toolbar className={classes.root}>
					<Typography variant='h3' style={{ color: 'white' }}>
						How To Brisket
						<Typography color='textPrimary' className={classes.date}>
							Today is {format(new Date(), 'MMMM do, Y')}
						</Typography>
					</Typography>
					<div>
						<a
							style={{
								color: 'white',
								padding: 10,
								textDecoration: 'none',
								fontSize: 'large',
							}}
							href='/'>
							Home
						</a>
						<a
							href='/create'
							style={{ textDecoration: 'none', fontSize: 'large' }}>
							<Link
								style={{
									color: 'white',
								}}>
								{' '}
								New Blog
							</Link>
						</a>
					</div>
				</Toolbar>
			</AppBar>

			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{ paper: classes.drawerPaper }}
				anchor='left'>
				<div>
					<Temperature />
				</div>
			</Drawer>

			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</Container>
	);
}
