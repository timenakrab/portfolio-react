import NavSocial from 'components/navsocial';
import { FC, Fragment } from 'react';
import Profile from './components/Profile';

const Social: FC = () => {
	return (
		<Fragment>
			<NavSocial />
			<div className="root-container">
				<Profile />
			</div>
		</Fragment>
	);
};

export default Social;
