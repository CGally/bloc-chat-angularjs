(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        /**
        * @desc Sets chatRooms to Room.all
        * @type {Object}
        */
        this.chatRooms = Room.all;

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
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
