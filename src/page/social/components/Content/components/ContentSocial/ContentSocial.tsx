import { mdiEmailOutline, mdiFacebook, mdiGithub, mdiInstagram, mdiLinkedin } from '@mdi/js';
import { FC, useCallback } from 'react';
import { ButtonSocial, Content, SocialIcon } from './ContentSocial.styled';

const ContentSocial: FC = () => {
	const handleClick = useCallback(
		(social: 'facebook' | 'instagram' | 'linkedin' | 'github' | 'mail') => {
			let link = '';
			if (social === 'facebook') {
				link = 'https://www.facebook.com/timenakrab';
			} else if (social === 'instagram') {
				link = 'https://www.instagram.com/streetboytime';
			} else if (social === 'github') {
				link = 'https://github.com/timenakrab';
			} else if (social === 'linkedin') {
				link = 'https://www.linkedin.com/in/watchara-hongkim';
			} else if (social === 'mail') {
				link = 'mailto:watchara.hongkim@gmail.com';
			}
			window.open(link);
		},
		[],
	);

	return (
		<Content>
			<ButtonSocial size="small" aria-label="facebook" onClick={() => handleClick('facebook')}>
				<SocialIcon path={mdiFacebook} size={2} />
			</ButtonSocial>
			<ButtonSocial size="small" aria-label="instagram" onClick={() => handleClick('instagram')}>
				<SocialIcon path={mdiInstagram} size={2} />
			</ButtonSocial>
			<ButtonSocial size="small" aria-label="linkedin" onClick={() => handleClick('linkedin')}>
				<SocialIcon path={mdiLinkedin} size={2} />
			</ButtonSocial>
			<ButtonSocial size="small" aria-label="github" onClick={() => handleClick('github')}>
				<SocialIcon path={mdiGithub} size={2} />
			</ButtonSocial>
			<ButtonSocial size="small" aria-label="mail" onClick={() => handleClick('mail')}>
				<SocialIcon path={mdiEmailOutline} size={2} />
			</ButtonSocial>
		</Content>
	);
};

export default ContentSocial;
