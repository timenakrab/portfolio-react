import colors from 'constant/colors';
import styled from 'styled-components';

interface IAlphabet {
	tranfrom?: 'lowercase' | 'uppercase';
}
const Alphabet = styled.span<IAlphabet>`
	color: ${colors.white};
	font-size: 32px;
	text-transform: ${({ tranfrom }) => tranfrom ?? 'lowercase'};

	:last-child::after {
		content: '|';
		margin-left: 4px;
	}

	@media only screen and (max-width: 768px) {
		font-size: 24px;
	}
	@media only screen and (max-width: 425px) {
		font-size: 18px;
	}
`;

export default Alphabet;
