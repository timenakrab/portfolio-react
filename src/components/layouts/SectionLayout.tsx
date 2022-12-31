import styled from 'styled-components';

interface ISectionLayout {
	bgColor?: string | '#ffffff';
	bgImage?: string | '';
}
const SectionLayout = styled.section<ISectionLayout>`
	display: flex;
	min-height: 100vh;
	overflow: hidden;
	box-sizing: border-box;
	background-color: ${({ bgColor }) => bgColor};
	${({ bgImage }) => (bgImage ? `background-image: url(${bgImage})` : null)};
	${({ bgImage }) => (bgImage ? 'background-size: cover' : null)};
	${({ bgImage }) => (bgImage ? 'background-repeat: no-repeat' : null)};
	${({ bgImage }) => (bgImage ? 'background-attachment: unset' : null)};
	${({ bgImage }) => (bgImage ? 'background-position: center' : null)};

	@media only screen and (max-width: 768px) {
		min-height: 50vh;
		${({ bgImage }) => (bgImage ? 'background-size: auto 100%' : null)};
		${({ bgImage }) => (bgImage ? 'background-attachment: unset' : null)};
		${({ bgImage }) => (bgImage ? 'background-position: center' : null)};
	}
`;

export default SectionLayout;
