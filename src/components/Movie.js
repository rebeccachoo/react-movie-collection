import React from "react";
import styled from "styled-components";
import { useMovieDispatch, useMovieState } from "../MovieContext";

const ListStyle = styled.li`
	font-size: 17px;
	list-style: none;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 20%;
	padding-top: 20px;
	cursor: pointer;
	&:hover {
		background-color: #abc8c0;
	}
	background: ${(props) =>
		props.hightlight === "active" ? "#DAF7DC" : "white"};
`;

const Movie = ({ id, src, name }) => {
	const dispatch = useMovieDispatch();
	const state = useMovieState();
	const onClick = () => dispatch({ type: "SELECTED", id });
	const hightlight = state.includes(id) ? "active" : "inactive";

	return (
		<ListStyle onClick={onClick} hightlight={hightlight}>
			<img src={src} alt="" width="140" height="200" />
			<br />
			{name}
		</ListStyle>
	);
};

export default Movie;
