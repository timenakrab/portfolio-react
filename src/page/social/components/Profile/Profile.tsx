import CircleGradient from 'assets/svg/CircleGradient';
import AvatarImg from 'assets/images/avatar.jpg';
import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import {
	Avatar,
	ButtonFollow,
	ProfileContainer,
	ProfileData,
	ProfileName,
	WarpAvatar,
	WarpProfileName,
} from './Profile.styled';
import { WorkExpInProfile } from '../WorkExp';
import AboutMe from '../AboutMe';

const Profile: FC = () => {
	const [isRotate, setIsRotate] = useState<boolean>(false);
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const desc = `I am frontend developer, and I am passionate and dedicated to my work. With 7 years
	experience as a web developer, I have acquired the skills and knowledge necessary to
	make your project a success. I enjoy every step of the design process, from discussion
	and collaboration.`;

	const handleClickAvatar = useCallback(() => {
		setIsRotate(!isRotate);
	}, [isRotate]);

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

	return (
		<Fragment>
			<ProfileContainer>
				<WarpAvatar>
					<CircleGradient isRotate={isRotate} width={150} height={150} />
					<Avatar src={AvatarImg} alt="avatar" onClick={handleClickAvatar} />
				</WarpAvatar>
				<ProfileData>
					<WarpProfileName>
						<ProfileName>WatcharaH</ProfileName>
						<ButtonFollow
							variant="contained"
							size="small"
							href="https://www.linkedin.com/in/watchara-hongkim"
						>
							Follow
						</ButtonFollow>
					</WarpProfileName>
					<WorkExpInProfile years={7} companies={3} />
					{windowDimensions.width > 425 ? <AboutMe>{desc}</AboutMe> : <Fragment />}
				</ProfileData>
			</ProfileContainer>
			{windowDimensions.width <= 425 ? (
				<AboutMe style={{ marginBottom: 16 }}>{desc}</AboutMe>
			) : (
				<Fragment />
			)}
		</Fragment>
	);
};

export default Profile;
