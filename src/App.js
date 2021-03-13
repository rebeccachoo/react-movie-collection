import React, { Component } from "react";
import styled from "styled-components";
import Movie from "./components/Movie";
import Selections from "./components/Selections";
import { MovieProvider } from "./MovieContext";

const WrapperStyle = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=Space+Grotesk:wght@500&display=swap");
	padding: 40px;
	padding-top: 20px;
	font-family: "Playfair Display", serif;
`;
const TitleStyle = styled.div`
	font-size: 30px;
	position: relative;
	top: +15px;
	left: +15px;
	background-color: #f7edf0;
	width: 30%;
	padding-left: 10px;
	box-sizing: border-box;
	padding-top: 5px;
	padding-bottom: 5px;
`;

class App extends Component {
	state = {
		lists: [
			{
				id: 1,
				name: "Coming 2 America",
				img: "images/Coming_2_America_release_poster.jpg",
				storyBy: "Barry W. Blaustein, David Sheffield, Justin Kanew",
				directorBy: "Craig Brewer",
				musicBy: "Jermaine Stegall",
			},
			{
				id: 2,
				name: "Raya and the Last Dragon",
				img: "images/Raya_and_the_Last_Dragon.png",
				storyBy: "Qui Nguyen, Adele Lim",
				directorBy: "Don Hall",
				musicBy: "James Newton Howard",
			},
			{
				id: 2,
				name: "Raya and the Last Dragon",
				img: "images/Raya_and_the_Last_Dragon.png",
				storyBy: "Qui Nguyen, Adele Lim",
				directorBy: "Don Hall",
				musicBy: "James Newton Howard",
			},
			{
				id: 2,
				name: "Raya and the Last Dragon",
				img: "images/Raya_and_the_Last_Dragon.png",
				storyBy: "Qui Nguyen, Adele Lim",
				directorBy: "Don Hall",
				musicBy: "James Newton Howard",
			},
			{
				id: 2,
				name: "Raya and the Last Dragon",
				img: "images/Raya_and_the_Last_Dragon.png",
				storyBy: "Qui Nguyen, Adele Lim",
				directorBy: "Don Hall",
				musicBy: "James Newton Howard",
			},
			{
				id: 2,
				name: "Raya and the Last Dragon",
				img: "images/Raya_and_the_Last_Dragon.png",
				storyBy: "Qui Nguyen, Adele Lim",
				directorBy: "Don Hall",
				musicBy: "James Newton Howard",
			},
		],
	};

	render() {
		return (
			<MovieProvider>
				<WrapperStyle>
					<TitleStyle>Your Chosen Movies</TitleStyle>
					<Selections />
					<TitleStyle>Movie Collection</TitleStyle>
					<Movie lists={this.state.lists} />
				</WrapperStyle>
			</MovieProvider>
		);
	}
}

export default App;
