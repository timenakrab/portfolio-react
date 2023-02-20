import styled from 'styled-components';

export const ProfileContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	padding: 16px 0px;
`;

export const WarpAvatar = styled.div`
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 0;
	display: flex;
	justify-content: center;
	position: relative;
	width: 150px;
	height: 150px;
	margin-right: 32px;

	& svg {
		position: absolute;
		z-index: -1;
	}
`;

export const Avatar = styled.img`
	width: 130px;
	height: 130px;
	border-radius: 50%;
	padding: 10px;
	cursor: pointer;
`;

export const ProfileData = styled.div`
	flex-grow: 2;
	flex-shrink: 1;
	flex-basis: 0;
`;
