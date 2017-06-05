
/*
* 
*/
import React from 'react';
import ReactDOM from "react-dom";
import PokeApp from './components/PokeApp';

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
			}
		];

ReactDOM.render(
		<PokeApp pokemons = {pokemons}/>,
		 document.getElementById('container')
	 );