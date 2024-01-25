import { useState } from "react";

interface Props {
	initialValue?: number;
}

interface CounterState {
	counter: number;
	clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
	const [{ counter, clicks }, setCounterState] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	});

	const handleClickPlus = (value: number) => {
		setCounterState(({ clicks, counter }) => ({
			counter: counter + value,
			clicks: clicks + 1,
		}));
	};

	// const handleClickMinus = () => {
	// 	//if (counter <= 0) return;
	// 	setCounterState((prev) => prev - 1);
	// };

	return (
		<>
			<h1>CounterBy: {counter}</h1>
			<h2>Clicks: {clicks}</h2>
			{/* <button onClick={handleClickMinus}>-1</button> */}
			<button onClick={() => handleClickPlus(1)}>+1</button>
			<button onClick={() => handleClickPlus(5)}>+5</button>
		</>
	);
};
