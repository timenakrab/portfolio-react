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
		align-items: center;
		width: 75%;
		height: 100%;
		padding: 0px 24px;
		box-sizing: border-box;
		background-color: ${colors.transparent};

		& ul {
			flex-grow: 0;
		}

		@media only screen and (max-width: 768px) {
			width: 100%;
		}
		@media only screen and (max-width: 425px) {
			width: 100%;
		}
	}
`;

export default Container;
