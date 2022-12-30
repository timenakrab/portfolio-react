import styled from 'styled-components';

interface INavbarWrapper {
	defaultColor: string;
	activeColor: string;
}
const NavbarWrapper = styled.nav<INavbarWrapper>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	width: 100%;
	padding: 8px 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 48px;
	box-sizing: border-box;
	background-color: ${({ defaultColor }) => defaultColor};
	transition: all 0.1s ease;

	&.active {
		background-color: ${({ activeColor }) => activeColor};
	}
`;

export default NavbarWrapper;
