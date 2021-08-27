import {Typography, Grid, Card, CardMedia, Container} from '@material-ui/core'
import BlogList from './BlogList'
import { useState } from 'react';

const BrisketCards = () => {

  	const [blogs, setBlogs] = useState([
			{
				title: 'Brisket Trim',
				body: 'Aaron shares his signature method for shaving and shaping briskets for an even and consistent cook.',
				link: 'https://www.masterclass.com/classes/aaron-franklin-teaches-texas-style-bbq/chapters/prep-brisket-trim#',
				photo: '/images/brisketTrim.jpeg',
				id: 1,
			},
			{
				title: 'Smoke: Brisket Part I',
				body: 'Phase one of our brisket smoke involves building a fire, applying slather and rub, and cooking the meat undisturbed. Learn Aaron’s technique for seasoning evenly and developing clean flavors in the critical first hours of your cook.',
				link: 'https://www.masterclass.com/classes/aaron-franklin-teaches-texas-style-bbq/chapters/smoke-brisket-part-i',
				photo: '/images/smoke.jpeg',
				id: 2,
			},
			{
				title: 'Smoke: Brisket Part II',
				body: 'In the second phase of our 12-hour brisket smoke, Aaron shares his techniques for spritzing, getting a derailed cook back on track, and pushing through the stall while maintaining a clean and steady fire.',
				link: 'https://www.masterclass.com/classes/aaron-franklin-teaches-texas-style-bbq/chapters/smoke-brisket-part-ii',
				photo: '/images/smoke2.jpeg',
				id: 3,
			},
			{
				title: 'Smoke: Brisket Part III',
				body: 'Learn Aaron’s technique for wrapping brisket, checking for tenderness, and assessing when to pull and rest your meat in the final phase of our brisket cook.',
				link: 'https://www.masterclass.com/classes/aaron-franklin-teaches-texas-style-bbq/chapters/smoke-brisket-part-iii',
				photo: '/images/smoke3.jpeg',
				id: 4,
			},
			{
				title: 'Finish: Brisket Slice',
				body: 'Aaron walks you through his detailed, cut-by-cut process for slicing your brisket to minimize waste and maximize balance and flavor.',
				link: 'https://www.masterclass.com/classes/aaron-franklin-teaches-texas-style-bbq/chapters/finish-brisket-slice',
				photo: '/images/aaronBrisket.png',
				id: 5,
			},
		]);

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
