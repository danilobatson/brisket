import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';
import {createTheme, ThemeProvider} from '@material-ui/core'
import Layout from './Components/Layout'


const theme = createTheme({
	typography: {
		fontFamily: 'Urbanist',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});
function App() {
  return (
		<ThemeProvider theme={theme}>
				<Router>
			<Layout>
						{/* <Navbar /> */}
							<Switch>
								<Route exact path='/'>
									<Home />
								</Route>
								<Route path='/create'>
									<Create />
								</Route>
								<Route path='/blogs/:id'>
									<BlogDetails />
								</Route>
								<Route path='*'>
									<NotFound />
								</Route>
							</Switch>
			</Layout>
				</Router>
		</ThemeProvider>
	);
}

export default App;
