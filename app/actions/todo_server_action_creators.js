var alt = require('../alt')

class TodoServerActions {
  constructor() {
    this.generateActions('receiveCreatedTodo', 'receiveAll')
  }
}

module.exports = alt.createActions(TodoServerActions)
