import colors from 'constant/colors';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './components/NavbarLogo';
import NavbarMenu from './components/NavbarMenu';
import NavbarWrapper from './components/NavbarWarpper';

const menus = [
	{ name: 'home', hash: '#introduce' },
	{ name: 'about', hash: '#aboutme' },
	{ name: 'timeline', hash: '#timeline' },
];

const Navbar: FC = () => {
	const [hashSelected, setHashSelected] = useState('');
	const history = useHistory();
	const init = useRef(false);

	const changeSection = (sectionId: string) => {
		const section = document.querySelector(sectionId);
		if (section) {
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

	const checkSection = useCallback(() => {
		const section1 = document.getElementById('introduce');
		const section2 = document.getElementById('aboutme');
		const section3 = document.getElementById('timeline');
		const scrollPosition = window.scrollY + 5;

		const sec1Start = section1?.offsetTop ?? 0;
		const sec1End = section1?.clientHeight ?? 0;
		const sec2Start = section2?.offsetTop ?? 0;
		const sec2End = sec1End + (section2?.clientHeight ?? 0);
		let hashId;

		if (section1 && scrollPosition >= sec1Start && scrollPosition < sec1End) {
			hashId = section1?.getAttribute('id');
		} else if (section2 && scrollPosition >= sec2Start && scrollPosition < sec2End) {
			hashId = section2?.getAttribute('id');
		} else {
			hashId = section3?.getAttribute('id');
		}
		setHashSelected(`#${hashId}`);
	}, []);

	useEffect(() => {
		if (!init.current) {
			init.current = true;
			checkActive();
			window.addEventListener('scroll', () => {
				checkActive();
				checkSection();
			});
		}
	}, [checkActive, checkSection]);

	useEffect(() => {
		setHashSelected(history.location.hash || menus[0].hash);
	}, [history]);

	return (
		<NavbarWrapper defaultColor={colors.transparent} activeColor={colors.black}>
			<div>
				<Logo src="/images/beard.svg" alt="logo" />
			</div>
			<div>
				{menus.map((menu, idx) => (
					<NavbarMenu
						className={hashSelected === menu.hash ? 'active' : ''}
						key={`menu_${idx}`}
						onClick={() => changeSection(menu.hash)}
					>
						{menu.name}
					</NavbarMenu>
				))}
			</div>
		</NavbarWrapper>
	);
};

export default Navbar;
