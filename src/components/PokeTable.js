import React from 'react';
import PokeRow from './PokeRow';

export default class PokeTable extends React.Component{
			render (){
				
				return <table className="poketable">
						<thead>
						  <tr>
						    <th>Número</th>
						    <th>Nombre</th> 						
						    <th>Avatar</th>
						  </tr>						  
						</thead>
						<tbody>
						  {

						  	this.props.pokemons.map(pokemon => {
						  		return <PokeRow key={pokemon.id} pokemon= {pokemon} growl={this.props.onGrowl} />
						  	})
						  }
						</tbody>
						</table>
			}
		}