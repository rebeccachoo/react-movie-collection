import React, { useReducer, createContext, useContext } from "react";

const initialState = [];

function movieReducer(state, action) {
	switch (action.type) {
		case "SELECTED":
			return state.includes(action.id)
				? state.filter((id) => id !== action.id)
				: state.concat(action.id);
		default:
			throw new Error("");
	}
}
const MovieStateContext = createContext();
const MovieDispatchContext = createContext();

export function MovieProvider({ children }) {
	const [state, dispatch] = useReducer(movieReducer, initialState);

	return (
		<MovieStateContext.Provider value={state}>
			<MovieDispatchContext.Provider value={dispatch}>
				{children}
			</MovieDispatchContext.Provider>
		</MovieStateContext.Provider>
	);
}

export function useMovieState() {
	const context = useContext(MovieStateContext);
	if (!context) {
		throw new Error("Cannot find MovieStateContext");
	}
	return context;
}
export function useMovieDispatch() {
	const context = useContext(MovieDispatchContext);
	if (!context) {
		throw new Error("Cannot find MovieDispatchContext");
	}
	return context;
}
