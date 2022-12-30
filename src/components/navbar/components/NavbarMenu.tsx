import colors from 'constant/colors';
import styled from 'styled-components';

const NavbarMenu = styled.button`
	height: 32px;
	border: 0;
	border-radius: 16px;
	background-color: transparent;
	cursor: pointer;
	margin-left: 8px;
	padding: 4px 8px;
	font-size: 16px;
	line-height: 24px;
	color: ${colors.red};

	&:hover {
		background-color: ${colors.pink};
		color: ${colors.white};
	}
`;

export default NavbarMenu;
