

import React from 'react';
import PokeAvatar from './PokeAvatar';

export default class PokeRow extends React.Component{
			
	render(){
		return <tr>
					<td>{this.props.pokemon.id}</td>
				    <td>{this.props.pokemon.nombre}</td>
				    <td><PokeAvatar key={this.props.pokemon.id} id={this.props.pokemon.id} /></td>
				</tr>
	}
}