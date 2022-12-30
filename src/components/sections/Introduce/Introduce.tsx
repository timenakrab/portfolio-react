import { SectionLayout } from 'components/layouts';
import { FC } from 'react';
import { NameKeyboard } from './components';
import Container from './components/Container';

const Introduce: FC<any> = () => {
	return (
		<SectionLayout id="section-introduce" bgImage="images/bgResume.webp">
			<Container>
				<div className="content">
					<div style={{ height: 'fit-content' }}>
						<h1>watchara h.</h1>
					</div>
					<div style={{ height: 52 }}>
						<NameKeyboard
							text="frontend developer"
							tranfrom="uppercase"
							durationIn={150}
							durationOut={50}
						/>
					</div>
					<div style={{ height: 'fit-content' }}>
						<h3>base in thailand</h3>
					</div>
				</div>
			</Container>
		</SectionLayout>
	);
};

export default Introduce;
