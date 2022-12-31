import { Button, Label } from 'components/commons';
import SectionLayout from 'components/layouts/SectionLayout';
import colors from 'constant/colors';
import { FC } from 'react';
import Icon from '@mdi/react';
import { mdiFaceManProfile, mdiEmailFastOutline } from '@mdi/js';
import { Container } from './components';

const AboutMe: FC<any> = () => {
	return (
		<SectionLayout id="aboutme">
			<Container>
				<div className="left">
					<img src="/images/aboutme.webp" />
				</div>
				<div className="right">
					<div>
						<Label className="mb-1">About Me</Label>
						<p className="mt-0 mb-1">
							I am frontend developer, and I am passionate and dedicated to my work. With 7 years
							experience as a web developer, I have acquired the skills and knowledge necessary to
							make your project a success. I enjoy every step of the design process, from discussion
							and collaboration.
						</p>
						<p className="mt-0 mb-1">
							<Icon className="mr-1" path={mdiFaceManProfile} size="18px" />
							<span>Watchara Hongkim</span>
						</p>
						<p className="mt-0 mb-1">
							<Icon className="mr-1" path={mdiEmailFastOutline} size="18px" />
							<span>watchara.hongkim@gmail.com</span>
						</p>
					</div>
					<div className="mt-3 download">
						<Button
							backgroundColor="rgba(0,0,0,0.05)"
							lineColor={colors.red}
							textColor={colors.darkBlue}
							twoLine
						>
							Download CV
						</Button>
					</div>
				</div>
			</Container>
		</SectionLayout>
	);
};

export default AboutMe;
