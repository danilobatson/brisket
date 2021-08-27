import useFetch from "./useFetch";
import {
	Button,
	makeStyles,
	Typography,
	Container,
} from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import BrisketCards from './BrisketCards'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	imageList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
	title: {
		color: theme.palette.primary.light,
	},
	titleBar: {
		background:
			'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
}));

const Home = () => {
		const {
			pending,
			error,
		} = useFetch('http://localhost:8000/blogs');
  const title = "Aaron Franklin's Masterclass Preview Site"
  const subtitle = 'Teaches Texas-Style BBQ';
  const servingNumber = Math.round(Math.random() * 1000);
  const numberPulled = servingNumber + Math.round(Math.random() * 1000);



  const lol = () => {
    if ((numberPulled - servingNumber) > 100) {
      return 'LOL'
    }
  }

  const handleClick = () => {
    alert(`You are number ${numberPulled}.
    There are only ${numberPulled - servingNumber} people ahead of you!` +
    ` ${lol()}`)
  }


  const classes = useStyles();

  return (
		<Container className='home' style={{marginTop: 100, padding:100}}>
			{error && <div>{error}</div>}
			{pending && <div>Loading...</div>}
			<Typography variant='h4' color='primary' align='center'>
				{title}
			</Typography>
			<Typography
				variant='h6'
				align='center'
				gutterBottom
				color='textSecondary'>
				{subtitle}{' '}
			</Typography>
			<br />
			<Container>
				<Typography
					variant='subtitle1'
					align='left'
					style={{ marginBottom: 5, fontWeight: 500 }}>
					Now Serving Order Number:
					<Typography
						variant='body1'
						color='primary'
						gutterBottom
						display='inline'
						style={{ fontWeight: 900 }}>
						{' '}
						{servingNumber}
					</Typography>
				</Typography>
				<Typography variant='button' display='block'>
					<Button
						style={{marginBottom: 60}}
						onClick={handleClick}
						variant='contained'
						size='small'
						endIcon={<ConfirmationNumberIcon />}>
						Get My Number
					</Button>
				</Typography>
			</Container>
			<BrisketCards />
		</Container>
	);
}

export default Home;
