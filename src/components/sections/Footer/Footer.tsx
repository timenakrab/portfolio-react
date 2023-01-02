import { mdiFacebook, mdiGithub, mdiInstagram } from '@mdi/js';
import Icon from '@mdi/react';
import colors from 'constant/colors';
import { FC } from 'react';
import { Container } from './components';

const Footer: FC = () => {
	return (
		<footer>
			<Container>
				<div className="content">
					<ul className="social-links">
						<li>
							<a target="_blank" href="https://www.facebook.com/timenakrab" rel="noreferrer">
								<Icon path={mdiFacebook} size="30px" color={colors.red} />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.instagram.com/streetboytime" rel="noreferrer">
								<Icon path={mdiInstagram} size="30px" color={colors.red} />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.github.com/timenakrab" rel="noreferrer">
								<Icon path={mdiGithub} size="30px" color={colors.red} />
							</a>
						</li>
					</ul>
					<p className="copyright">© Copyright 2023 Watchara H.</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
