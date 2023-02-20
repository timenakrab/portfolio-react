import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const PorfolioPage = lazy(
	() => import(/* webpackChunkName: "watcharah-portfolio-page" */ 'page/portfolio'),
);

const SocialPage = lazy(
	() => import(/* webpackChunkName: "watcharah-social-page" */ 'page/social'),
);

const App = () => {
	return (
		<BrowserRouter>
			<Suspense>
				<Switch>
					<Route path="/" component={PorfolioPage} exact />
					<Route path="/social" component={SocialPage} exact />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
