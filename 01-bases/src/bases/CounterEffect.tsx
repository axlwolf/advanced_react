import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const MAX_COUNT = 10;

export const CounterEffect = () => {
	const [counter, setCounter] = useState(5);

	const counterElement = useRef<HTMLHeadingElement>(null);

	const handleClick = () => {
		//if (counter >= MAX_COUNT) return;
		setCounter((counter: number) => Math.min(counter + 1, MAX_COUNT));
	};

	useEffect(() => {
		if (counter < 10) return;
		console.log("%cMax value achieved", "color: tomato; background: black; ");

		const tl = gsap.timeline();

		tl.to(counterElement.current, {
			y: -10,
			duration: 0.3,
			ease: "ease.out",
		}).to(counterElement.current, {
			y: 0,
			duration: 1,
			ease: "bounce.out",
		});
	}, [counter]);

	return (
		<>
			<h1>CounterEffect</h1>
			<h2 ref={counterElement}>{counter}</h2>
			<button onClick={handleClick}>+1</button>
		</>
	);
};
