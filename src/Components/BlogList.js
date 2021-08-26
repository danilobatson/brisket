import { Link } from 'react-router-dom';
import { Typography, makeStyles, CardHeader, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
	title: {
		'&:hover': {
			textDecoration: 'underline',
			color: 'dodgerblue',
			textDecorationThickness: 2,
		},
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
});
const BlogList = ({ blogs, timeline, subtitle }) => {
	const hover = useStyles()
	return (
		<div className='blog-list'>
			{blogs.map((blog) => (
				<div className='brisket-timeline' key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<CardHeader className={hover.title} title={blog.title} />

						<CardContent>
							<CardMedia
								style={{ paddingTop: '56%' }}
								image={blog.photo}
								title='Brisket Trim'
							/>
							<br/>
							<Typography variant='body1' color='textSecondary'>
								{blog.body}
							</Typography>
						</CardContent>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
