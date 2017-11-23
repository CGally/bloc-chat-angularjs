(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        /**
        * @desc Sets chatRooms to Room.all
        * @type {Object}
        */
        this.chatRooms = Room.all;

        /**
        * @desc Sets currentRoom to null
        * @type {Object}
        */
        this.currentRoom = null;

        /**
        * @desc Sets currentUser to the username stored in the cookie 'blocChatCurrentUser'
        * @type {Object}
        */
        this.currentUser = $cookies.get('blocChatCurrentUser');
        /**
        * @desc Logs the current username
        */
        console.log(this.currentUser);

        /**
        * @function popUp
        * @desc Creates a new modal instance when the button on home.html is clicked.
        * Sets the controller to ModalCtrl as modal and sets the url.
        * @param {Object}
        */
        this.popUp = function() {
            $uibModal.open({
                ariaLabelledBy: 'my-modal-title',
                ariaDescribedBy: 'my-modal-body',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal',
                keyboard: true,
                templateUrl:'/templates/modal.html'
            });
        };

        /**
        * @function activeRoom
        * @desc Set the room that is clicked to the currentRoom. Then calls Message.getByRoomId
        * to associate any messages that have the same id as the room.
        * @param {Object}
        */
        this.activeRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        };

        /**
        * @function sendMessage
        * @desc Passes the message sent as an argument. Then calls the Message.sendMessage
        * function and passes in this.currentUser, newMessage, this.currentRoom.$id as arguments
        * @param {Object} username, content, roomId
        */
        this.sendMessage = function(newMessage) {
            this.currentUser = $cookies.get('blocChatCurrentUser');
            console.log(this.currentUser);

            Message.send(this.currentUser, newMessage, this.currentRoom.$id);
            this.newMessage = null;
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
