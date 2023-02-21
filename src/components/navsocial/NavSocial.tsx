import { FC } from 'react';
import styled from 'styled-components';
import Logo from 'assets/images/logo-black.webp';

const Navbar = styled.nav`
	position: fixed;
	width: 100vw;
	height: 60px;
	border-bottom: 1px solid rgb(219, 219, 219);
`;
const RootNavbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const NavSocial: FC = () => {
	return (
		<Navbar>
			<RootNavbar className="root-navbar">
				<img src={Logo} height={30} alt="logo" />
			</RootNavbar>
		</Navbar>
	);
};

export default NavSocial;
