import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
	backgroundColor?: string;
	lineColor?: string;
	textColor?: string;
};
const OneLineButton = styled.button<ButtonProps>`
	display: inline-block;
	position: relative;
	color: ${(props) => props.textColor};
	font-size: 18px;
	line-height: 26px;
	cursor: pointer;
	background-color: ${(props) => props.backgroundColor};
	padding: 8px 16px;
	border: 0;
	&::before {
		content: '';
		width: 0;
		height: 2px;
		position: absolute;
		transition: all 0.2s linear;
		background-color: ${(props) => props.lineColor};
		right: 0;
		top: 0;
		transition-delay: 0.2s;
	}
	&::after {
		content: '';
		width: 0;
		height: 2px;
		position: absolute;
		transition: all 0.2s linear;
		background-color: ${(props) => props.lineColor};
		left: 0;
		bottom: 0;
		transition-delay: 0.6s;
	}
	&:hover::before {
		width: 100%;
		transition-delay: 0.4s;
	}
	&:hover::after {
		width: 100%;
		transition-delay: 0s;
	}
`;
const ChildOne = styled.span<ButtonProps>`
	display: block;
	&::before {
		content: '';
		width: 2px;
		height: 0;
		position: absolute;
		transition: all 0.2s linear;
		background-color: ${(props) => props.lineColor};
		transition-delay: 0s;
		left: 0;
		top: 0;
	}
	&::after {
		content: '';
		width: 2px;
		height: 0;
		position: absolute;
		transition: all 0.2s linear;
		background-color: ${(props) => props.lineColor};
		transition-delay: 0.4s;
		right: 0;
		bottom: 0;
	}
	${OneLineButton}:hover &::before {
		height: 100%;
		transition-delay: 0.6s;
	}
	${OneLineButton}:hover &::after {
		height: 100%;
		transition-delay: 0.2s;
	}
`;
const TwoLineButton = styled.button<ButtonProps>`
	display: inline-block;
	position: relative;
	color: ${(props) => props.textColor};
	font-size: 18px;
	line-height: 26px;
	cursor: pointer;
	background-color: ${(props) => props.backgroundColor};
	padding: 8px 16px;
	border: 0;
	&::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 0;
		height: 2px;
		transition: all 0.2s linear;
		background-color: ${(props) => props.lineColor};
		transition-delay: 0.2s;
	}
	&::after {
		position: absolute;
		content: '';
		bottom: 0;
		right: 0;
		width: 0;
		height: 2px;
		transition: all 0.2s linear;
		background-color: ${(props) => props.lineColor};
		transition-delay: 0.2s;
	}
	&:hover::before,
	&:hover::after {
		width: 100%;
		transition-delay: 0s;
	}
`;
const ChildTwo = styled.span<ButtonProps>`
	display: block;
	&::before {
		content: '';
		bottom: 0;
		left: 0;
		width: 2px;
		height: 0;
		position: absolute;
		transition: all 0.2s linear;
		background-color: ${(props) => props.lineColor};
		transition-delay: 0s;
	}
	&::after {
		content: '';
		top: 0;
		right: 0;
		width: 2px;
		height: 0;
		position: absolute;
		transition: all 0.2s linear;
		background-color: ${(props) => props.lineColor};
		transition-delay: 0s;
	}
	${TwoLineButton}:hover &::before, ${TwoLineButton}:hover &::after {
		height: 100%;
		transition-delay: 0.2s;
	}
`;

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | ReactNode;
	textColor?: string;
	backgroundColor?: string;
	lineColor?: string;
	twoLine?: boolean;
}

const Button: FC<IButton> = ({
	twoLine,
	children,
	textColor = '#000000',
	backgroundColor = '#ffffff',
	lineColor = '#000000',
	style,
}) => {
	if (twoLine) {
		return (
			<TwoLineButton
				style={{ ...style }}
				backgroundColor={backgroundColor}
				lineColor={lineColor}
				textColor={textColor}
			>
				<ChildTwo lineColor={lineColor}>{children}</ChildTwo>
			</TwoLineButton>
		);
	}

	return (
		<OneLineButton
			style={{ ...style }}
			backgroundColor={backgroundColor}
			lineColor={lineColor}
			textColor={textColor}
		>
			<ChildOne lineColor={lineColor}>{children}</ChildOne>
		</OneLineButton>
	);
};

export default Button;
