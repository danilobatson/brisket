import {
	Button,
	FormControl,
	NativeSelect,
	Typography,
	Container,
  FormHelperText,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';



const Temperature = () => {

  const handleClick = () => {
		alert(
			`Not connected to a server. Link not active yet`
		);
	};

  const [pounds, setPounds] = useState([])



	const [age, setAge] = useState('');
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const [temp, setTemp] = useState('225F');
	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState('money');

	const handleSubmit = (e) => {
		e.preventDefault();
		setTitleError(false);
		setDetailsError(false);

		if (title === '') {
			setTitleError(true);
		}
		if (details === '') {
			setDetailsError(true);
		}
		if (title && details) {
			console.log(title, details, category);
		}
	};

	return (
		<Container size='sm'>
			<Typography
				variant='h6'
				color='textSecondary'
				component='h2'
				gutterBottom>
				How Many Hours Should I Cook My Brisket?
			</Typography>

			<form noValidate autoComplete='off' onSubmit={handleSubmit}>
				<Container>
					<FormControl style={{ margin: 20 }}>
						<NativeSelect value='Weight' onChange={handleChange}>
							<option aria-label='None' value='' />
							<option value='9,'>9 lbs</option>
							<option value='10'>10 lbs</option>
							<option value='11'>11 lbs</option>
							<option value='12'>12 lbs</option>
							<option value='13'>13 lbs</option>
							<option value='14'>14 lbs</option>
							<option value='15'>15 lbs</option>
							<option value='16'>16 lbs</option>
							<option value='17'>17 lbs</option>
							<option value='18'>18 lbs</option>
							<option value='19'>19 lbs</option>
							<option value='20'>20 lbs</option>
							<option value='21'>21 lbs</option>
							<option value='22'>22 lbs</option>
							<option value='23'>23 lbs</option>
							<option value='24'>24 lbs</option>
							<option value='25'>25 lbs</option>
							<option value='26'>26 lbs</option>
							<option value='27'>27 lbs</option>
							<option value='28'>28 lbs</option>
							<option value='29'>29 lbs</option>
							<option value='30'>30 lbs</option>
						</NativeSelect>						<FormHelperText>How Many Pounds Is Your Brisket?</FormHelperText>
					</FormControl>
					<FormControl style={{ margin: 20 }}>
						<NativeSelect value='Weight' onClick={handleChange}>
							<option aria-label='None' value='' />
							<option value='225F'>225 F</option>
							<option value='250F'>250 F</option>
							<option value='300F'>300 F</option>
						</NativeSelect>
						<FormHelperText>What Temp Is Your Smoker?</FormHelperText>
						<Button
							onClick={handleClick}
							type='submit'
							color='primary'
							variant='outlined'
							endIcon={<SendIcon />}>
							Submit
						</Button>
					</FormControl>
				</Container>
			</form>
		</Container>
	);
};

export default Temperature;
