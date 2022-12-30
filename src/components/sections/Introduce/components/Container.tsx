import colors from 'constant/colors';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex: 10;
	align-items: center;
	width: 100%;
	padding-top: 48px;

	& div.content {
		width: 50%;
		padding: 0px 24px;
		box-sizing: border-box;
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
			& h1 {
				font-size: 40px;
				-webkit-text-stroke: 2px #fff;
			}
			& h3 {
				font-size: 24px;
			}
		}
		@media only screen and (max-width: 425px) {
			& h1 {
				font-size: 32px;
				-webkit-text-stroke: 1px #fff;
			}
			& h3 {
				font-size: 18px;
			}
		}
	}
`;

export default Container;
