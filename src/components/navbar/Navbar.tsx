import colors from 'constant/colors';
import { FC, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/NavbarLogo';
import NavbarMenu from './components/NavbarMenu';
import NavbarWrapper from './components/NavbarWarpper';

const Navbar: FC = () => {
	const navigate = useNavigate();
	const init = useRef(false);

	const changeSection = (sectionId: string) => {
		const section = document.querySelector(sectionId);
		if (section) {
			navigate(`/${sectionId}`);
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const checkActive = useCallback(() => {
		const nav = document.querySelector('nav');
		if (window.scrollY > 0 && nav) {
			nav?.classList.add('active');
		} else {
			nav?.classList.remove('active');
		}
	}, []);

	useEffect(() => {
		if (!init.current) {
			init.current = true;
			checkActive();
			window.addEventListener('scroll', checkActive);
		}
	}, [checkActive]);

	return (
		<NavbarWrapper defaultColor={colors.transparent} activeColor={colors.black}>
			<div>
				<Logo src="/images/beard.svg" alt="logo" />
			</div>
			<div>
				<NavbarMenu onClick={() => changeSection('#section-introduce')}>Home</NavbarMenu>
				<NavbarMenu onClick={() => changeSection('#section2')}>Section 2</NavbarMenu>
				<NavbarMenu onClick={() => changeSection('#section3')}>Section 3</NavbarMenu>
			</div>
		</NavbarWrapper>
	);
};

export default Navbar;
