import colors from 'constant/colors';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 10;
	align-items: center;
	width: 100%;
	padding-top: 48px;

	& div.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
		height: 100%;
		padding: 0px 24px;
		box-sizing: border-box;
		background-color: ${colors.transparent};

		@media only screen and (max-width: 768px) {
			width: 100%;
		}
		@media only screen and (max-width: 425px) {
			width: 100%;
		}
	}
`;

export default Container;
