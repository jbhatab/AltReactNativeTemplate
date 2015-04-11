var TodoServerActionCreators = require('../actions/todo_server_action_creators')

module.exports = {

  getAllTodos: function() {
    // console.log('GET ALLT ODOS')
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(TodoServerActionCreators.receiveAll)
        TodoServerActionCreators.receiveAll(responseData);
      })
      .done();
  }

  // createMessage: function(message, threadName) {
  //   // simulate writing to a database
  //   var rawMessages = JSON.parse(localStorage.getItem('messages'));
  //   var timestamp = Date.now();
  //   var id = 'm_' + timestamp;
  //   var threadID = message.threadID || ('t_' + Date.now());
  //   var createdMessage = {
  //     id: id,
  //     threadID: threadID,
  //     threadName: threadName,
  //     authorName: message.authorName,
  //     text: message.text,
  //     timestamp: timestamp
  //   };
  //   rawMessages.push(createdMessage);
  //   localStorage.setItem('messages', JSON.stringify(rawMessages));

  //   // simulate success callback
  //   setTimeout(function() {
  //     TodoServerActionCreators.receiveCreatedMessage(createdMessage);
  //   }, 0);
  // }

};
