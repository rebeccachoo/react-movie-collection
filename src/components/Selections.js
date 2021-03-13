import React from "react";
import styled from "styled-components";
import { useMovieState } from "../MovieContext";

const SelectionStyle = styled.div`
	background-color: #ded9e2;
	box-sizing: border-box;
	min-height: 200px;
	border-radius: 5px;
`;

const Selections = () => {
	const movies = useMovieState();
	return <SelectionStyle>{movies.map((id) => console.log(id))}</SelectionStyle>;
};

export default Selections;
