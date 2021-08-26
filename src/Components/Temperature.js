import {
	Button,
	FormControl,
	NativeSelect,
	Typography,
	Container,
  FormHelperText,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useState, useEffect } from 'react';



const Temperature = () => {

  const handleClick = () => {
		alert(
			`Link not active yet`
		);
	};

  const [pounds, setPounds] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/pounds')
    .then(res =>
      res.json())
      .then(data => setPounds(data))
  }, [])

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
							{pounds.map((pound) => (
								<option value={pound.weight} key={pound.id}>
									{pound.weight}
								</option>
							))}
						</NativeSelect>
						<FormHelperText>How Many Pounds Is Your Brisket?</FormHelperText>
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
