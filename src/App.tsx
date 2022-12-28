import { useEffect, useRef } from 'react';
import Introduce from 'components/sections/Introduce';
import SectionTwo from 'components/sections/SectionTwo';
import SectionThree from 'components/sections/SectionThree';

function App() {
	const section1Ref = useRef();
	const section2Ref = useRef();
	const section3Ref = useRef();
	// const scrollDirection = useRef();

	// function scrollToSection(sectionRef: any) {
	// 	if (sectionRef.current) {
	// 		sectionRef.current.scrollIntoView({ behavior: 'smooth' });
	// 	}
	// }

	// function changeSection(sectionId: string) {
	// 	const section = document.getElementById(sectionId);
	// 	if (section) {
	// 		section.scrollIntoView({ behavior: 'smooth' });
	// 	}
	// }

	// const handleScroll = useCallback(() => {
	// 	const section1 = document.getElementById('section1');
	// 	const section2 = document.getElementById('section2');
	// 	const section3 = document.getElementById('section3');

	// 	if (section1 && window.scrollY <= section1.offsetTop) {
	// 		changeSection('section1');
	// 	} else if (section2 && window.scrollY <= section2.offsetTop) {
	// 		changeSection('section2');
	// 	} else if (section3 && window.scrollY <= section3.offsetTop) {
	// 		changeSection('section3');
	// 	}
	// }, []);

	useEffect(() => {
		// scrollToSection(section1Ref);
		// window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div>
			{/* <a href="#section1" onClick={() => scrollToSection(section1Ref)}>
				Section 1
			</a>
			<a href="#section2" onClick={() => scrollToSection(section2Ref)}>
				Section 2
			</a>
			<a href="#section3" onClick={() => scrollToSection(section3Ref)}>
				Section 3
			</a> */}
			<Introduce forwardRef={section1Ref} />
			<SectionTwo forwardRef={section2Ref} />
			<SectionThree forwardRef={section3Ref} />
		</div>
	);
}

export default App;
