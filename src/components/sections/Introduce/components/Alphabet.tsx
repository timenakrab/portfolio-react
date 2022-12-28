import styled from 'styled-components';

const Alphabet = styled.span`
	:last-child::after {
		content: '|';
	}
`;

export default Alphabet;
