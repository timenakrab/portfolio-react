import styled from 'styled-components';
import Icon from '@mdi/react';
import { IconButton } from '@mui/material';

export const Content = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 32px;
`;

export const ButtonSocial = styled(IconButton)`
	margin: 8px !important;

	@media screen and (max-width: 425px) {
		width: 48px !important;
		height: 48px !important;
	}
`;
export const SocialIcon = styled(Icon)`
	padding: 4px;
`;
