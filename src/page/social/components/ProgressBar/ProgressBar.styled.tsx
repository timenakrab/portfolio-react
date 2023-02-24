import styled, { keyframes } from 'styled-components';

const ProgressAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

interface IProgress {
	width?: string;
	height?: string;
}
export const Progress = styled.div<IProgress>`
	width: ${({ width = '100vw' }) => width};
	height: ${({ height = '4px' }) => height};
	background-color: #ddd;
`;

interface IBar {
	colorStart?: string;
	colorEnd?: string;
	second?: number;
}
export const Bar = styled.div<IBar>`
	height: 100%;
	background-image: linear-gradient(
		to right,
		${({ colorStart = '#ff1493' }) => colorStart},
		${({ colorEnd = '#800080' }) => colorEnd}
	);
	width: 0%;
	animation: ${ProgressAnimation} ${({ second = 3 }) => second}s linear forwards;
`;
