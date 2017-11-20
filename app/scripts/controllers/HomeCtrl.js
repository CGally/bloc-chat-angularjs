(function() {
    function HomeCtrl(Room, $uibModal) {
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
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
