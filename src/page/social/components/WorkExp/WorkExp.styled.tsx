import styled from 'styled-components';

export const WorkExp = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	margin: 0;
	padding: 0;
	margin-bottom: 20px;

	& li {
		margin-right: 40px;
		& span.value {
			font-weight: 500;
			margin-right: 4px;
		}
		& span.label {
			font-weight: 300;
		}
	}
`;

export const WorkExp2 = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	margin: 0;
	padding: 16px 0px;

	& li {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		& span.value {
			font-weight: 500;
			margin-right: 4px;
		}
		& span.label {
			font-size: 14px;
			font-weight: 300;
			color: #848484;
		}
	}
`;
