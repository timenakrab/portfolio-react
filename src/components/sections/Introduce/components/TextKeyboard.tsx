import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Alphabet from './Alphabet';

interface ITextKeyboard {
	texts: string[];
	tranfrom?: 'lowercase' | 'uppercase';
	durationIn?: number; // miliseconds
	durationOut?: number; // miliseconds
}
const TextKeyboard: FC<ITextKeyboard> = ({
	texts,
	tranfrom,
	durationIn = 300,
	durationOut = 150,
}) => {
	const [renderText, setRenderText] = useState<string>('');
	const init = useRef<boolean>(false);
	const isFirstRender = useRef<boolean>(true);
	const order = useRef<number>(1);
	const textOrder = useRef<number>(0);

	const showAlphabet = useCallback(() => {
		const textLength = texts[textOrder.current].split('').length;
		const textInterval = setInterval(() => {
			if (order.current <= textLength) {
				setRenderText(texts[textOrder.current].slice(0, order.current));
				order.current += 1;
			} else {
				clearInterval(textInterval);
			}
		}, durationIn);
	}, [durationIn, texts]);

	const deleteAlphabet = useCallback(() => {
		const textInterval = setInterval(() => {
			if (order.current >= 0) {
				setRenderText(texts[textOrder.current].slice(0, order.current));
				order.current -= 1;
			} else {
				clearInterval(textInterval);
				order.current = 1;
			}
		}, durationOut);
	}, [durationOut, texts]);

	useEffect(() => {
		if (!init.current) {
			init.current = true;
		} else if (init.current && renderText === texts[textOrder.current]) {
			setTimeout(() => {
				deleteAlphabet();
			}, 1000);
		} else if (init.current && renderText === '') {
			let txtOrder = textOrder.current + 1;
			if (isFirstRender.current || textOrder.current === texts.length - 1) {
				txtOrder = 0;
				isFirstRender.current = false;
			}
			textOrder.current = txtOrder;
			showAlphabet();
		}
	}, [deleteAlphabet, renderText, showAlphabet, texts]);

	return (
		<div>
			{renderText === '' ? (
				<Alphabet />
			) : (
				renderText.split('').map((txt, idx) => (
					<Alphabet key={`name_${idx}`} tranfrom={tranfrom}>
						{txt}
					</Alphabet>
				))
			)}
		</div>
	);
};

export default TextKeyboard;
