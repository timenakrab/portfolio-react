import { Button } from '@mui/material';
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
	margin-right: 32px;

	& svg {
		position: absolute;
		z-index: -1;
	}

	@media screen and (max-width: 767px) {
		& svg {
			width: 80px;
			height: 80px;
			position: absolute;
			z-index: -1;
		}
	}
`;
export const Avatar = styled.img`
	width: 130px;
	height: 130px;
	border-radius: 50%;
	padding: 10px;
	cursor: pointer;
	object-fit: cover;
	object-position: center center;

	@media screen and (max-width: 767px) {
		width: 70px;
		height: 70px;
		padding: 5px;
	}
`;

export const ProfileData = styled.div`
	flex-grow: 2;
	flex-shrink: 1;
	flex-basis: 0;
`;
export const WarpProfileName = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;

	@media screen and (max-width: 425px) {
		flex-direction: column;
	}
`;
export const ProfileName = styled.h2`
	font-size: 20px;
	line-height: 32px;
	font-weight: 400;
	margin: 0;
	margin-right: 16px;
	@media screen and (max-width: 425px) {
		margin-right: 0px;
	}
`;
export const WrapperButtonFollow = styled.div`
	display: flex;
	flex-direction: row;
`;
export const ButtonFollow = styled(Button)`
	color: #000000 !important;
	border-radius: 8px !important;
	background-color: rgb(239, 239, 239) !important;
	box-shadow: none !important;

	@media screen and (max-width: 425px) {
		width: 50%;
	}
`;
