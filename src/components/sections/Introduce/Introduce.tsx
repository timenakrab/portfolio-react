import SectionLayout from 'components/layouts/SectionLayout';
import { FC } from 'react';
import { NameKeyboard } from './components';

const Introduce: FC<any> = () => {
	// const [index, setIndex] = useState(0);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setIndex((index) => (index + 1) % letters.length);
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// }, [letters.length]);

	return (
		<SectionLayout>
			<NameKeyboard text="WATCHARA HONGKIM" />
		</SectionLayout>
	);
};

export default Introduce;
