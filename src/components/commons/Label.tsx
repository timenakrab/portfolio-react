import colors from 'constant/colors';
import styled from 'styled-components';

const Label = styled.label`
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.05);
	text-transform: uppercase;
	padding: 4px 10px;
	font-weight: 600;
	font-size: 12px;
	color: ${colors.darkBlue};
	letter-spacing: 0;
`;

export default Label;
