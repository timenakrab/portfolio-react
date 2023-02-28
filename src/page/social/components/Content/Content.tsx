import { mdiLaptop, mdiShareVariantOutline, mdiSchoolOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { FC, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { ContentCompany, ContentEducation, ContentSocial } from './components';
import { ButtonMenu, TabsMenu, WarpTabsMenu } from './Content.styled';

type TabsProps = 'company' | 'education' | 'social' | '';
const menus: {
	icon: string;
	tabs: TabsProps;
	pathname: TabsProps;
}[] = [
	{
		icon: mdiLaptop,
		tabs: 'company',
		pathname: '',
	},
	{
		icon: mdiSchoolOutline,
		tabs: 'education',
		pathname: 'education',
	},
	{
		icon: mdiShareVariantOutline,
		tabs: 'social',
		pathname: 'social',
	},
];
const active = '#800080';
const inactive = '#848484';

const Content: FC = () => {
	const location = useLocation();
	const history = useHistory();
	const [tabs, setTabs] = useState<TabsProps>('company');

	useEffect(() => {
		if (location.pathname === '/education') {
			setTabs('education');
		} else if (location.pathname === '/social') {
			setTabs('social');
		} else {
			setTabs('company');
		}
	}, [location]);

	const handleChangeTabs = useCallback(
		(pathname: TabsProps) => {
			setTabs(pathname);
			history.push(`/${pathname}`);
		},
		[history],
	);

	return (
		<div>
			<WarpTabsMenu>
				{menus.map((menu) => (
					<TabsMenu key={`menu_${menu.tabs}`}>
						<ButtonMenu onClick={() => handleChangeTabs(menu.pathname)}>
							<Icon path={menu.icon} size={1} color={tabs === menu.tabs ? active : inactive} />
						</ButtonMenu>
					</TabsMenu>
				))}
			</WarpTabsMenu>
			{tabs === 'company' ? <ContentCompany /> : null}
			{tabs === 'education' ? <ContentEducation /> : null}
			{tabs === 'social' ? <ContentSocial /> : null}
		</div>
	);
};

export default Content;
