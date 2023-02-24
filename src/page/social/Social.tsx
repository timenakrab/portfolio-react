import { Divider } from '@mui/material';
import NavSocial from 'components/navsocial';
import { FC, Fragment } from 'react';
import { Content, ModalImage, Profile, WorkExpOutProfile } from './components';

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
			<ModalImage />
		</Fragment>
	);
};

export default Social;
