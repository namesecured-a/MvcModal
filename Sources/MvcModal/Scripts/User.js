MvcModal = window.MvcModal || {};
MvcModal.User = MvcModal.User || (function () {
    var handler = function (parameters) {
        var createUserParams = parameters.createUserParams;
        var params = parameters.createUserParams;
        var createUserHandler = null;
        
        var subscribeHandlers = function() {
            $(params.createButtonSelector).on('click', function (e) {
                e.preventDefault();

                createUserHandler = new MvcModal.User.Create.Handler(createUserParams);
                createUserHandler.initialize();
                return false;
            });
        };

        var unsubscribeHandlers = function () {
            $(params.createButtonSelector).off('click');
        };

        var initialize = function() {
            unsubscribeHandlers();
            subscribeHandlers();
        };

        var dispose = function() {
            unsubscribeHandlers();
            if (createUserHandler !== null) {
                createUserHandler.dispose();
            }
        };

        return {
            initialize: initialize,
            dispose: dispose
        };
    };

    return {
        Handler: handler,
    };
})();