(function() {
  function Message($firebaseArray, $cookies) {
    /**
    * @desc Initializes a Message object
    * @type {Object}
    */
    var Message = {};

    /**
    * @desc References all of the children of messages
    * @type {Object}
    */
    var ref = firebase.database().ref().child("messages");

    /**
    * @desc Puts all children of messages in the database into an array
    * @type {Array}
    */
    var messages = $firebaseArray(ref);

    /**
    * @function getByRoomId
    * @desc Returns an array of messages with the same id as the room passed into the function
    * @param {Object} room
    */
    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    /**
    * @function send
    * @desc Adds an object to messages in the firebase database
    * @param {Object} username, content, roomId
    */
    Message.send = function(username, content, roomId) {
        messages.$add({
     		     username: username,
     		     sentAt: firebase.database.ServerValue.TIMESTAMP,
     		     content: content,
     		     roomId: roomId,
     	  })
     };
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
  })();
