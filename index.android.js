import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';

const geraNumRand = () => {
	alert (Math.floor(Math.random() * 10));
}

const App = () => {
  return (
    /* O elemento View deve conter outros elementos, ele é o principal. */
    <View>
    	<Text>Gerador de números randômicos</Text>
    	<Button title="Gerar número randômico" onPress={geraNumRand} />
    </View>
  );
};

AppRegistry.registerComponent("reactApp1", () => App);
