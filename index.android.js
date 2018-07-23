var React = require("react");
/*var Text = require("react-native").Text;
var View = require("react-native").View;
var Button = require("react-native").Button;
var AppRegistry = require("react-native").AppRegistry;*/

var {Text, View, Button, AppRegistry} = require("react-native");

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
