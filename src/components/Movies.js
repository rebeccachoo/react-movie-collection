import React from "react";
import Movie from "./Movie";
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

const Movies = ({ lists }) => {
	return (
		<MovieContainerStyle>
			{lists.map((list) => (
				<Movie
					key={list.id}
					id={list.id}
					src={list.img}
					name={list.name}
					storyBy={list.storyBy}
					directorBy={list.directorBy}
					musicBy={list.musicBy}
				/>
			))}
		</MovieContainerStyle>
	);
};

export default Movies;
