
import React from 'react';
import ReactDOM from "react-dom";
import PokeTable from './components/PokeTable';

var pokemons = [
			{
				nombre : "Squirtle",
				id : 1		
			},
			{
				nombre : "Pokemon 2",
				id : 2
			},
			{
				nombre : "Pokemon 3",
				id : 3
			},
			{
				nombre : "Pokemon 4",
				id : 4
			},
			{
				nombre : "Pokemon 5",
				id : 5
			},
			{
				nombre : "Pokemon 6",
				id : 6
			},
			{
				nombre : "Pokemon 7",
				id : 7
			},
			{
				nombre : "Pokemon 8",
				id : 8
			},
			{
				nombre : "Pokemon 9",
				id : 9
			},
			{
				nombre : "Pokemon 10",
				id : 10
			},
			{
				nombre : "Pokemon 11",
				id : 11
			},
			{
				nombre : "Pokemon 12",
				id : 12
			},
			{
				nombre : "Pokemon 13",
				id : 13
			},
			{
				nombre : "Pokemon 14",
				id : 14
			},
			{
				nombre : "Pokemon 15",
				id : 15
			},
			{
				nombre : "Pokemon 16",
				id : 16
			},
			{
				nombre : "Pokemon17",
				id : 17
			},
			{
				nombre : "Pokemon17",
				id : 18
			}
		];

ReactDOM.render(
		<PokeTable pokemons={pokemons} />,
		 document.getElementById('container')
	 );