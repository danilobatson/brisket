import {Link} from 'react-router-dom'
import { Typography, Container } from '@material-ui/core/';

const Navbar = () => {
	return (
		<Container>
				<Typography variant='h3' color='secondary'>
					How To Brisket
				</Typography>
				<div className='links'>
					<Link to='/'>Home</Link>
					<Link
						to='/create'
						style={{
							color: 'white',
							backgroundColor: '#f1356d',
						}}>
						New Blog
					</Link>
				</div>
		</Container>
	);
};

export default Navbar;
