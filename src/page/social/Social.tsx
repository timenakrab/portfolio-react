import { Divider } from '@mui/material';
import NavSocial from 'components/navsocial';
import { FC, Fragment } from 'react';
import { Content, Profile, WorkExpOutProfile } from './components';

const Social: FC = () => {
	return (
		<Fragment>
			<NavSocial />
			<div className="root-container">
				<Profile />
				<Divider />
				<WorkExpOutProfile years={7} companies={3} />
				<Content />
			</div>
		</Fragment>
	);
};

export default Social;
