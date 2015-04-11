var alt = require('../alt')

var TodoActionCreators = require('../actions/todo_server_action_creators')

class TodoStore {
  constructor() {
    this.bindActions(TodoActionCreators)
    this.todos = [{title: 'thing'}, {title: 'stuff'}, {title: 'thing'}]
  }

  onReceiveAll(todos) {
    console.log(todos)
    this.todos = todos
  }

  // onReceiveCreatedTodo(todo) {
  //   console.log('receive created todo')
  //   this.todos.push(todo)
  // }

  static getAll() {
    return this.getState().todos
  }
}

module.exports = alt.createStore(TodoStore, 'TodoStore')