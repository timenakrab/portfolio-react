import Navbar from 'components/navbar';
import { Introduce, SectionThree, AboutMe } from 'components/sections';
import { Main } from 'components/layouts';
import { Fragment } from 'react';

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Main>
				<Introduce />
				<AboutMe />
				<SectionThree />
			</Main>
		</Fragment>
	);
};

export default App;
