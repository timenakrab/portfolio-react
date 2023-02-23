import { Divider } from '@mui/material';
import { FC, Fragment, useEffect, useState } from 'react';
import { WorkExp2 } from './WorkExp.styled';

interface IWorkExpOutProfile {
	years: number;
	companies: number;
}
const WorkExpOutProfile: FC<IWorkExpOutProfile> = ({ years, companies }) => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (windowDimensions.width > 425) {
		return null;
	}

	return (
		<Fragment>
			<WorkExp2>
				<li>
					<span className="value">{years}</span>
					<span className="label">experiences</span>
				</li>
				<li>
					<span className="value">{companies}</span>
					<span className="label">companies</span>
				</li>
			</WorkExp2>
			<Divider />
		</Fragment>
	);
};

export default WorkExpOutProfile;
