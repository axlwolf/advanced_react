import { useState } from "react";

interface Props {
	initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
	const [counter, setCounter] = useState(initialValue);

	const handleClickPlus = () => {
		setCounter((counter: number) => counter + 1);
	};

	const handleClickMinus = () => {
		if (counter <= 0) return;
		setCounter((counter: number) => counter - 1);
	};

	return (
		<>
			<h1>Counter {counter}</h1>
			<button onClick={handleClickMinus}>-1</button>
			<button onClick={handleClickPlus}>+1</button>
		</>
	);
};
