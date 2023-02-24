import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const PorfolioPage = lazy(
	() => import(/* webpackChunkName: "watcharah-portfolio-page" */ 'page/portfolio'),
);
const CompanyPage = lazy(
	() => import(/* webpackChunkName: "watcharah-company-page" */ 'page/social'),
);
const EducationPage = lazy(
	() => import(/* webpackChunkName: "watcharah-education-page" */ 'page/social'),
);
const SocialPage = lazy(
	() => import(/* webpackChunkName: "watcharah-social-page" */ 'page/social'),
);
const NotFoundPage = lazy(
	() => import(/* webpackChunkName: "watcharah-notfound-page" */ 'page/notfound'),
);

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Suspense>
					<Switch>
						<Route path="/" component={CompanyPage} exact />
						<Route path="/education" component={EducationPage} exact />
						<Route path="/social" component={SocialPage} exact />
						<Route path="/portfolio" component={PorfolioPage} exact />
						<Route path="*" component={NotFoundPage} />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</RecoilRoot>
	);
};

export default App;
