(function() {
  function BlocChatCookies($cookies, $uibModal) {
    /**
    * @desc Sets currentUser to the cookie 'blocChatCurrentUser'
    * @type {Object}
    */
    var currentUser = $cookies.get('blocChatCurrentUser');

    /**
    * @desc Opens a modal if no currentUser is set
    */
    if (!currentUser || currentUser === '') {
      $uibModal.open({
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modal',
          templateUrl:'/templates/username.html',
          keyboard: false
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
