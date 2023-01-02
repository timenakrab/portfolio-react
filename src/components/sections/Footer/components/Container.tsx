import colors from 'constant/colors';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 10;
	align-items: center;
	width: 100%;
	height: 164px;
	background-color: ${colors.black};
	padding: 32px 0px;
	box-sizing: border-box;

	& div.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		background-color: ${colors.transparent};

		& ul {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0;
			margin: 0;
			margin-bottom: 8px;
			& li {
				display: unset;
				margin: 0px 8px;
			}
		}
		& p.copyright {
			margin: 0px;
			text-align: center;
			color: ${colors.white};
		}
	}
`;

export default Container;
