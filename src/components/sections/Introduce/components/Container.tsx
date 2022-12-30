import colors from 'constant/colors';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
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
		& h1 {
			font-size: 56px;
			-webkit-text-stroke: 3px ${colors.orange};
			color: ${colors.transparent};
			text-transform: uppercase;
			font-weight: 900;
			margin: 0;
		}
		& h3 {
			font-size: 32px;
			color: ${colors.orange};
			text-transform: uppercase;
			font-weight: 900;
			margin: 0;
		}

		@media only screen and (max-width: 768px) {
			width: 100%;
			background-color: rgba(0, 0, 0, 0.4);
			& h1 {
				font-size: 40px;
				-webkit-text-stroke: 2px ${colors.orange};
			}
			& h3 {
				font-size: 24px;
			}
		}
		@media only screen and (max-width: 425px) {
			width: 100%;
			background-color: rgba(0, 0, 0, 0.4);
			& h1 {
				font-size: 32px;
				-webkit-text-stroke: 2px ${colors.orange};
			}
			& h3 {
				font-size: 18px;
			}
		}
	}
`;

export default Container;
