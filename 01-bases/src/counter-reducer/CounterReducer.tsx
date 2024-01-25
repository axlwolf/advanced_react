/* eslint-disable no-mixed-spaces-and-tabs */
import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as actions from "./actions/actions";

const INITIAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
};

export const CounterReducerComponent = () => {
	const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const { counter } = counterState;

	const handleReset = () => {
		dispatch(actions.doReset());
	};

	const increaseBy = (value: number) => {
		dispatch(actions.doIncreaseBy(value));
	};

	return (
		<>
			<h1>Segmented Counter Reducer: {counter}</h1>
			{JSON.stringify(counterState, null, 2)}
			<button onClick={() => increaseBy(1)}>+1</button>
			<button onClick={() => increaseBy(5)}>+5</button>
			<button onClick={() => increaseBy(10)}>+10</button>
			<button onClick={handleReset}>Reset</button>
		</>
	);
};
