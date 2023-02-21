import { Divider } from '@mui/material';
import NavSocial from 'components/navsocial';
import { FC, Fragment } from 'react';
import Profile from './components/Profile';
import { WorkExpOutProfile } from './components/WorkExp';

const Social: FC = () => {
	return (
		<Fragment>
			<NavSocial />
			<div className="root-container">
				<Profile />
				<Divider />
				<WorkExpOutProfile years={7} companies={3} />
			</div>
		</Fragment>
	);
};

export default Social;
