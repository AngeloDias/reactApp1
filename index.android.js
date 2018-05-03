var React = require("react");
var Text = require("react-native").Text;
var AppRegistry = require("react-native").AppRegistry;

const App = function(){
  return (
    <Text>Meu primeiro APP</Text>
  );
};

AppRegistry.registerComponent("reactApp1", function() {return App});