var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight
} = React;

var styles = require("../styles/application");

var TodoCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight>
      <View>
        <Text>
          {this.props.todo.title}
        </Text>
      </View>
      </TouchableHighlight>
    );
  }
});

module.exports = TodoCell;