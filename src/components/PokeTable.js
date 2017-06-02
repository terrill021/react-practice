import React from 'react';
import PokeRow from './PokeRow';

export default class PokeTable extends React.Component{
			render (){
				
				return <table>
						  <tr>
						    <th>Número</th>
						    <th>Nombre</th> 						
						    <th>Avatar</th>
						  </tr>						  
						  {

						  	this.props.pokemons.map(pokemon => {
						  		return <PokeRow key={pokemon.id} pokemon= {pokemon} />
						  	})
						  }
						  
						</table>
			}
		}