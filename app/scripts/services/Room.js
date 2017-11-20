(function() {
    function Room($firebaseArray) {
        /**
        * @desc Initializes a Room object
        * @type {Object}
        */
        var Room = {};

        /**
        * @desc References all of the children of rooms
        * @type {Object}
        */
        var ref = firebase.database().ref().child("rooms");

        /**
        * @desc Puts all children of rooms in the database into an array
        * @type {Array}
        */
        var rooms = $firebaseArray(ref);

        /**
        * @function add
        * @desc Adds the information submited in the modal. to the rooms array.
        * @param {Object} room
        */
        Room.add = function(room) {
            rooms.$add(room).then(function(ref) {
                var id = ref.key;
                rooms.$indexFor(id); // returns location in the array
            });
        };

        Room.all = rooms;

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
