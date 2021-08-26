import {Typography, Grid, Card, CardMedia, Container} from '@material-ui/core'
import BlogList from './BlogList'
import useFetch from './useFetch';


const BrisketCards = () => {

  	const {
			data: blogs,
		} = useFetch('http://localhost:8000/blogs');

  return (
		<Grid container spacing={2}>
			<Container>
			<Grid item xs={12}>
			<CardMedia
				style={{ paddingTop: '56%' }}
				image='/images/aaronfranklin.jpeg'
				title='Aaron Franklin'
			/>
			</Grid>
			</Container>
			<Grid item xs={12}>
				<Typography
					variant='h3'
					align='center'
					className='timeline'
					style={{ marginTop: 40, marginBottom: 40 }}>
					The Timeline
				</Typography>
			</Grid>
			<Grid item xs={12} sm={6} md={12}>
				<Grid item xs={12}>
					<Typography
						variant='h4'
						className='blog-list-subtitle'
						color='primary'
						style={{ marginTop: 10, marginBottom: 20 }}>
						I. Trim
					</Typography>
				</Grid>
				<Card elevation={6}>
					{blogs && (
						<BlogList
							blogs={blogs.filter((blog) => blog.title.includes('Trim'))}
						/>
					)}
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Typography
					variant='h4'
					className='blog-list-subtitle'
					color='primary'
					style={{ marginTop: 30 }}>
					II. Smoke
				</Typography>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Card elevation={6}>
					{blogs && (
						<BlogList
							blogs={blogs.filter(
								(blog) => blog.title === 'Smoke: Brisket Part I'
							)}
						/>
					)}
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Card elevation={6}>
					{blogs && (
						<BlogList
							blogs={blogs.filter(
								(blog) => blog.title === 'Smoke: Brisket Part II'
							)}
						/>
					)}
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Card elevation={6}>
					{blogs && (
						<BlogList
							blogs={blogs.filter(
								(blog) => blog.title === 'Smoke: Brisket Part III'
							)}
						/>
					)}
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Typography
					variant='h4'
					className='blog-list-subtitle'
					color='primary'
					style={{ marginLeft: 30, marginTop: 50 }}>
					III. Finish
				</Typography>
			</Grid>
			<Grid item xs={12} sm={6} md={12}>
				<Card elevation={6} style={{ marginBottom: 50 }}>
					{blogs && (
						<BlogList
							blogs={blogs.filter((blog) => blog.title.includes('Finish'))}
						/>
					)}
				</Card>
			</Grid>
		</Grid>
	);
}

export default BrisketCards;
