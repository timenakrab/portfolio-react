import { FC, useEffect, useState } from 'react';
import { WorkExp } from './WorkExp.styled';

interface IWorkExpInProfile {
	years: number;
	companies: number;
}
const WorkExpInProfile: FC<IWorkExpInProfile> = ({ years, companies }) => {
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

	if (windowDimensions.width <= 425) {
		return null;
	}

	return (
		<WorkExp>
			<li>
				<span className="value">{years}</span>
				<span className="label">experiences</span>
			</li>
			<li>
				<span className="value">{companies}</span>
				<span className="label">companies</span>
			</li>
		</WorkExp>
	);
};

export default WorkExpInProfile;
