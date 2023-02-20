import CircleGradient from 'assets/svg/CircleGradient';
import AvatarImg from 'assets/images/avatar.jpg';
import { FC, useCallback, useState } from 'react';
import { Avatar, ProfileContainer, ProfileData, WarpAvatar } from './Profile.styled';

const Profile: FC = () => {
	const [speed, setSpeed] = useState<number>(0);

	const handleClickAvatar = useCallback(() => {
		setSpeed(1);
	}, []);

	return (
		<ProfileContainer>
			<WarpAvatar>
				<CircleGradient width={150} height={150} speed={speed} />
				<Avatar src={AvatarImg} alt="avatar" onClick={handleClickAvatar} />
			</WarpAvatar>
			<ProfileData />
		</ProfileContainer>
	);
};

export default Profile;
