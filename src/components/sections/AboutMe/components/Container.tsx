// import colors from 'constant/colors';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex: 10;
	align-items: center;
	width: 100%;
	padding-top: 48px;

	& .left {
		width: 50%;
		box-sizing: border-box;
		padding-left: 64px;
		padding-right: 32px;
		text-align: right;
		& img {
			width: 100%;
			border-radius: 8px;
			box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
		}
	}
	& .right {
		width: 50%;
		box-sizing: border-box;
		padding-left: 32px;
		padding-right: 64px;
		text-align: left;
		& h3 {
			font-size: 26px;
			line-height: 40px;
			margin: 0;
			margin-bottom: 8px;
		}
		& p {
			font-size: 18px;
			line-height: 26px;
			margin: 0;
		}
	}

	@media only screen and (max-width: 768px) {
		& .left {
			padding-left: 24px;
			padding-right: 12px;
			& img {
				width: 100%;
			}
		}
		& .right {
			padding-left: 12px;
			padding-right: 24px;
			& h3 {
				font-size: 24px;
				line-height: 36px;
				margin: 0;
				margin-bottom: 8px;
			}
			& p {
				font-size: 16px;
				line-height: 24px;
				margin: 0;
			}
		}
	}
	@media only screen and (max-width: 425px) {
		flex-direction: column;
		& .left {
			width: 100%;
			padding-left: 24px;
			padding-right: 24px;
			& img {
				width: 100%;
				margin-bottom: 16px;
			}
		}
		& .right {
			width: 100%;
			padding-left: 24px;
			padding-right: 24px;
		}
	}
`;

export default Container;
