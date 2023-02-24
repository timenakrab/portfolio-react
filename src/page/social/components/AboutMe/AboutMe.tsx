import { FC, ReactNode } from 'react';
import { Description } from './AboutMestyled';

interface IAboutMe {
	children: ReactNode;
	style?: React.CSSProperties | undefined;
}
const AboutMe: FC<IAboutMe> = ({ children, style }) => {
	return <Description style={{ ...style }}>{children}</Description>;
};

export default AboutMe;
