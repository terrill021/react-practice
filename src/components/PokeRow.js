

import React from 'react';
import PokeAvatar from './PokeAvatar';

export default class PokeRow extends React.Component{
		
	onClick(ev){
		//1: Objeto a bindear, 2 .. n: Parametros q se pasan
		this.props.growl.call(null, this.props.pokemon.nombre);
	}

	render(){
		return <tr className = "pokerow" onClick={this.onClick.bind(this)}>
					<td>{this.props.pokemon.id}</td>
				    <td>{this.props.pokemon.nombre}</td>
				    <td><PokeAvatar key={this.props.pokemon.id} id={this.props.pokemon.id} /></td>
				</tr>
	}
}