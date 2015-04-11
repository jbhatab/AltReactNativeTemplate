var React = require('react-native');

var {
  Text,
  View,
  ListView,
} = React;

var styles = require("../styles/application");
var TodoStore = require('../stores/todo_store')

var TodoCell = require('./todo_cell')
var ListenerMixin = require('alt/mixins/ListenerMixin');

var TodoWebAPIUtils = require('../utils/todo_web_api_utils')

function getStateFromStores() {
  data_source = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
  return {
    todos: data_source.cloneWithRows(TodoStore.getAll())
  };
}

var ViewReactClass = React.createClass({
  mixins: [ListenerMixin],
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    console.log('FETCH DATA')
    this.listenTo(TodoStore, this._onChange);
    TodoWebAPIUtils.getAllTodos()
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  render: function() {
    // if(!this.state.loaded){
    //   return(
    //     <View style={styles.container}>
    //     <Text style={styles.loadingText}>
    //       Fetching Posts...
    //     </Text>
    //   </View>
    //   );
    // }
    return (
      this.renderListView()
    );
  },
  renderListView: function(){
    return(
      <ListView
        dataSource={this.state.todos}
        renderRow={this.renderTodoCell}
        style={styles.postsListView}/>
    );
  },
  renderTodoCell: function(todo){
    return(
      <TodoCell
        // onSelect={() => this.selectPost(post)}
        todo={todo}/>
    );
  },
  // selectPost: function(post){
  //   this.props.navigator.push({
  //     title: "Top Story #"+post.count.substring(0, post.count.length - 1),
  //     component: PostView,
  //     passProps: {post_id: UtilFuncs.getId(post.comments.href),
  //                 post_title: post.title.text,
  //                 post_by: post.username.text.split(" ")[0],
  //                 post_comments_count: post.comments.text.split(" ")[0],
  //                 post_points_count: post.points.split(" ")[0],}
  //   });
  // },

});
module.exports = ViewReactClass;