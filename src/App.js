import React, { Component } from "react";
import styled from "styled-components";
import Movies from "./components/Movies";
import Selections from "./components/Selections";
import { MovieProvider } from "./MovieContext";

const WrapperStyle = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
	padding: 40px;
	padding-top: 20px;
	font-family: "Roboto", sans-serif;
`;
const TitleStyle = styled.div`
	font-size: 30px;
	position: relative;
	top: +15px;
	left: +15px;
	background-color: #f3eaf4;
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
				id: 3,
				name: "Minari",
				img: "images/Minari.png",
				storyBy: "Lee Isaac Chung",
				directorBy: "Lee Isaac Chung",
				musicBy: "Emile Mosseri",
			},
			{
				id: 4,
				name: "Time to Hunt",
				img: "images/Time_to_Hunt.jpg",
				storyBy: "Yoon Sung-hyun",
				directorBy: "Yoon Sung-hyun",
				musicBy: "James Newton Howard",
			},
			{
				id: 5,
				name: "Psychokinesis",
				img: "images/Psychokinesis.jpg",
				storyBy: "Yeon Sang-ho",
				directorBy: "Yeon Sang-ho",
				musicBy: "Jang Young-gyu",
			},
			{
				id: 6,
				name: "Alive",
				img: "images/Alive_2020.jpg",
				storyBy: "Cho Il-hyung",
				directorBy: "Cho Il-hyung",
				musicBy: "Tae-seong Kim",
			},
			{
				id: 7,
				name: "Peninsula",
				img: "images/Peninsula_poster.jpg",
				storyBy: "Cho Il-hyung",
				directorBy: "Cho Il-hyung",
				musicBy: "Tae-seong Kim",
			},
			{
				id: 8,
				name: "Pandora",
				img: "images/Pandora_-_판도라.jpg",
				storyBy: "Park Jung-woo",
				directorBy: "Park Jung-woo",
				musicBy: "Jo Yeong-wook",
			},
			{
				id: 9,
				name: "The Battleship Island",
				img: "images/The_Battleship_Island_(film).jpg",
				storyBy: "Cho Sung-min",
				directorBy: "Cho Sung-min",
				musicBy: "Bang Jun-seok",
			},
			{
				id: 10,
				name: "Along with the Gods: The Last 49 Days",
				img: "images/Along_with_the_Gods-The_Last_49_Days_(film).jpg",
				storyBy: "Kim Yong-hwa",
				directorBy: "Kim Yong-hwa",
				musicBy: "Bang Jun-seok",
			},
		],
	};

	render() {
		return (
			<MovieProvider>
				<WrapperStyle>
					<TitleStyle>Your Chosen Movies</TitleStyle>
					<Selections lists={this.state.lists} />
					<TitleStyle>Movie Collection</TitleStyle>
					<Movies lists={this.state.lists} />
				</WrapperStyle>
			</MovieProvider>
		);
	}
}

export default App;
