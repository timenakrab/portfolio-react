import Navbar from 'components/navbar';
import { Introduce, TimelineWork, AboutMe, Footer } from 'components/sections';
import { Main } from 'components/layouts';
import { Fragment } from 'react';
import { Divider } from '@mui/material';

const Portfolio = () => {
	return (
		<Fragment>
			<Navbar />
			<Main>
				<Introduce />
				<AboutMe />
				<div style={{ padding: '0 10%' }}>
					<Divider />
				</div>
				<TimelineWork />
				<Footer />
			</Main>
		</Fragment>
	);
};

export default Portfolio;
