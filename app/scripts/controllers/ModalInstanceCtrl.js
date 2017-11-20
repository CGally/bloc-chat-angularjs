(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
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
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
