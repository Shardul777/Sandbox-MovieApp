// Import libraries to make a component

import React from 'react';
import { Text,View  } from 'react-native';

// Make a component

const Header = (props) => {

	const { textStyle,viewStyle } = styles;

	return (
			<View style={viewStyle}>
			<Text style={textStyle}> {props.headerText}</Text>
			</View>
		);
};

const styles = {

	viewStyle: {
		backgroundColor: '#EF5F2F',
		justifyContent:'center',
		alignItems:'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 10},
		shadowOpacity: 0.2 
	},
	textStyle:{
		fontSize: 20,
		//fontColor: 'white'
	}
}
// 

export default Header;