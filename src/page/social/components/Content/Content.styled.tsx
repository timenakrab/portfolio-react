import { Button } from '@mui/material';
import styled from 'styled-components';

export const WarpTabsMenu = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	margin: 0;
	padding: 8px 0px;
`;
export const TabsMenu = styled.li`
	width: calc(100% / 3);
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const ButtonMenu = styled(Button)`
	width: 100%;
`;
