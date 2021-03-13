import React from "react";
import styled from "styled-components";

const MovieContainerStyle = styled.ul`
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	width: 100%;
	padding: 10px;
	padding-left: 1%;
	padding-right: 1%;
	flex-wrap: wrap;
	margin: 0 auto;
	justify-content: center;
`;
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
		background-color: orange;
	}
`;

const Movie = ({ lists }) => {
	return (
		<MovieContainerStyle>
			{lists.map((list) => (
				<ListStyle key={list.id}>
					<img src={list.img} alt="movie" width="140" height="200" />
					{list.name}
				</ListStyle>
			))}
		</MovieContainerStyle>
	);
};

export default Movie;
