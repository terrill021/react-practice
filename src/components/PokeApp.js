import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';
import uid from 'uid';

export default class PokeApp extends React.Component{

	

	constructor(props){
		super(props);
		this.state = {
			messages : []
		};

		this.onGrowl = this.onGrowl.bind(this); 
	}

	onGrowl(name){
		let text = `${name}, ${name} !`;
		let message = {text : text, id : uid()}
		this.state.messages.push(message);
		this.setState({messages : this.state.messages});
	}

	render(){
		
		return <div className="pokeapp"> 
		 	<PokeTable pokemons={this.props.pokemons} onGrowl = {this.onGrowl} />
		 	<PokeChat messages = {this.state.messages}/>
		 </div> 
	}
}