import CircleGradient from 'assets/svg/CircleGradient';
import AvatarImg from 'assets/images/avatar.jpg';
import { FC, useCallback, useState } from 'react';
import {
	AboutMe,
	Avatar,
	ButtonFollow,
	ProfileContainer,
	ProfileData,
	ProfileName,
	WarpAvatar,
	WarpProfileName,
} from './Profile.styled';
import { WorkExpInProfile } from '../WorkExp';

const Profile: FC = () => {
	const [isRotate, setIsRotate] = useState<boolean>(false);

	const handleClickAvatar = useCallback(() => {
		setIsRotate(!isRotate);
	}, [isRotate]);

	return (
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
				<AboutMe>
					I am frontend developer, and I am passionate and dedicated to my work. With 7 years
					experience as a web developer, I have acquired the skills and knowledge necessary to make
					your project a success. I enjoy every step of the design process, from discussion and
					collaboration.
				</AboutMe>
			</ProfileData>
		</ProfileContainer>
	);
};

export default Profile;
