(function() {
    function ModalInstanceCtrl($uibModalInstance, Room, $cookies) {
        /**
        * @function addChat
        * @desc Calls the Room.add function and passes the information submited in the modal.
        * @param {Object} room
        */
        this.addChat = function(room) {
            Room.add(room);
            $uibModalInstance.close({$value: room});
        };

        /**
        * @function cancel
        * @desc Uses $uibModalInstance.dismiss to remove the modal when the cancel button
        * is clicked
        * @param {Object}
        */
        this.cancel = function() {
            $uibModalInstance.dismiss({$value: 'cancel'});
        };

        /**
        * @function
        * @desc Calls the $cookies.put function and passes the information submited in the modal.
        * Then sets that information to the cookie 'blocChatCurrentUser'.
        * @param {Object}
        */
        this.addUsername = function(username) {
            $cookies.put('blocChatCurrentUser', username);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', '$cookies', ModalInstanceCtrl]);
})();
