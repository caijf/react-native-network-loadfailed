import React, {Component} from 'react';

import LoadFailed from 'react-native-network-loadfailed';

export default class LoadFailedExample extends Component{
	render(){

		return (
			<LoadFailed
				onPressButton={()=>{alert('callback')}}
			/>
		)
	}
}



