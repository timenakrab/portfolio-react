import colors from 'constant/colors';
import styled from 'styled-components';

const NavbarMenu = styled.button`
	height: 32px;
	border: 0;
	background-color: transparent;
	cursor: pointer;
	margin-left: 8px;
	padding: 4px 8px;
	font-size: 16px;
	line-height: 24px;
	color: ${colors.red};
	text-transform: capitalize;

	&.active {
		color: ${colors.white} !important;
		border-bottom: 2px solid #ffffff;
	}
`;

export default NavbarMenu;
