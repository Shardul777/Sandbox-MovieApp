import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,TouchableHighlight,Image  } from 'react-native';


 class ListPage extends Component{
 	render(){
		return(
			<View>

				<View style={styles.container}>
					<Text style={styles.usernameText}>Welcome, Username </Text>
				</View>
				<View style={styles.container}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.description} > Orders </Text>
					</TouchableOpacity>
				</View>

				<View style={styles.container}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.description} > Requests </Text>
					</TouchableOpacity>
				</View>

				<View style={styles.container}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.description} > Statistics </Text>
					</TouchableOpacity>
				</View>


				<View style={styles.container}>

					<Image 
					style={{width: 100, height: 100}}
					source={require('./officesupplies.png')} />

				</View>

				<View style={styles.container}>
					<Image 
					style={{width: 300, height: 100}}
					source={require('./logo.png')} />
				</View>

			
			</View>

			);
	} 
}

const styles = StyleSheet.create({

	
	container:{
		justifyContent: 'center',
		alignItems: 'center',
		height:100,
	},
	button: {
    	alignItems: 'center',
    	backgroundColor: '#60A549',
    	width:200,
    	padding: 10
  	},
  	description:{
    	fontSize: 18,
    	textAlign: 'center',
    	color: '#FFFFFF'
	},
	usernameText:{

		fontSize:18,
		color:'#34AACA',
		fontStyle:'italic',
	}


});

export default ListPage;