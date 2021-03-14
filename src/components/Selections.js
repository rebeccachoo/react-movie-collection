import React from "react";
import styled from "styled-components";
import { useMovieState } from "../MovieContext";

const SelectionStyle = styled.div`
	background-color: #ded9e2;
	box-sizing: border-box;
	min-height: 200px;
	border-radius: 5px;
	padding: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;
const ChosenMovieStyle = styled.div`
	width: 15%;
	margin-right: 2%;
	height: 150px;
	/* border: 1px solid black; */
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 15px;
	img {
		padding-bottom: 10px;
	}
	.title {
		font-weight: bold;
	}
`;

const Selections = ({ lists }) => {
	// lists is a full list of all movies
	const movies = useMovieState();
	return (
		<SelectionStyle>
			{lists.map((list) => {
				return movies.includes(list.id) ? (
					<ChosenMovieStyle>
						<img src={list.img} width="100" height="100" alt="" />
						<div className="title">{list.name}</div>
					</ChosenMovieStyle>
				) : (
					""
				);
			})}
		</SelectionStyle>
	);
};

export default Selections;
