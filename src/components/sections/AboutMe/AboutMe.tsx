import { Label } from 'components/commons';
import SectionLayout from 'components/layouts/SectionLayout';
import { FC } from 'react';
import { Container } from './components';

const AboutMe: FC<any> = () => {
	return (
		<SectionLayout id="aboutme">
			<Container>
				<div className="left">
					<img src="/images/aboutme.webp" />
				</div>
				<div className="right">
					<Label>About Me</Label>
					<h3>Frontend Developer based in Thailand</h3>
					<p>
						I am frontend developer, and I am passionate and dedicated to my work. With 7 years
						experience as a web developer, I have acquired the skills and knowledge necessary to
						make your project a success. I enjoy every step of the design process, from discussion
						and collaboration.
					</p>
				</div>
			</Container>
		</SectionLayout>
	);
};

export default AboutMe;
