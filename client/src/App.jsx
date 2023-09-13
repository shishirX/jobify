import Authentication from './pages/authentication';
import Error from './pages/error';
import Landing from './pages/landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <h1>Dashboard</h1>,
	},
	{
		path: '/landing',
		element: <Landing />,
	},

	{
		path: '/auth',
		element: <Authentication />,
	},
	{
		path: '*',
		element: <Error />,
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
