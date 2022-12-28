import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Alphabet from './Alphabet';

interface INameKeyboard {
	text: string;
}
const NameKeyboard: FC<INameKeyboard> = ({ text }) => {
	const [renderText, setRenderText] = useState('');
	const init = useRef<boolean>(false);
	const order = useRef(1);

	const showAlphabet = useCallback(() => {
		const textLength = text.split('').length;
		const textInterval = setInterval(() => {
			if (order.current <= textLength) {
				setRenderText(text.slice(0, order.current));
				order.current += 1;
			} else {
				clearInterval(textInterval);
			}
		}, 300);
	}, [order, text]);

	const deleteAlphabet = useCallback(() => {
		const textInterval = setInterval(() => {
			if (order.current >= 0) {
				setRenderText(text.slice(0, order.current));
				order.current -= 1;
			} else {
				clearInterval(textInterval);
				order.current = 1;
			}
		}, 300);
	}, [order, text]);

	useEffect(() => {
		if (!init.current) {
			init.current = true;
		} else if (init.current && renderText === text) {
			deleteAlphabet();
		} else if (init.current && renderText === '') {
			showAlphabet();
		}
	}, [deleteAlphabet, renderText, showAlphabet, text]);

	return (
		<div>
			{renderText.split('').map((txt, idx) => (
				<Alphabet key={`name_${idx}`}>{txt}</Alphabet>
			))}
		</div>
	);
};

export default NameKeyboard;
