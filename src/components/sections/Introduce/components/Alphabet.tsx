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
	}

	@media only screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export default Alphabet;
