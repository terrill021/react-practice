
import React from 'react';

export default class PokeAvatar extends React.Component{

	render (){
		var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.id}.png`;
		return <img src={url} />
	}
}; 