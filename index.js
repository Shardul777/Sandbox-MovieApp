// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('MoviesAppv1', () => App);

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import ListPage from './src/components/ListPage';

const App = () => (
		//<Text> Hello World React Native </Text>
	<View>
		<Header headerText = { 'NxJ Logistics'}/> 
		<ListPage />
	</View>
);

AppRegistry.registerComponent('MoviesAppv1', () => App); 