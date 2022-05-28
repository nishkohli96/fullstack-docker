import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from 'pages/home';
const Page404 = lazy(() => import('pages/Page404'));

const Routing: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
