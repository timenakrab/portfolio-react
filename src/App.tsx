import Navbar from 'components/navbar';
import { Introduce, TimelineWork, AboutMe } from 'components/sections';
import { Main } from 'components/layouts';
import { Fragment } from 'react';

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Main>
				<Introduce />
				<AboutMe />
				<TimelineWork />
			</Main>
		</Fragment>
	);
};

export default App;
