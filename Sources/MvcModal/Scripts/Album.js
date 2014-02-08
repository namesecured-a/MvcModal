MvcModal = window.MvcModal || {};
MvcModal.Album = MvcModal.Album || (function () {
    var handler = function(parameters) {
        var params = parameters;
        var createHandler = new MvcModal.Album.Create.Handler(params.create);

        var init = function () {
            createHandler.init();
        };

        var free = function () {
            freeCreateHanlder();
        };

        var freeCreateHanlder = function() {
            if (createHandler !== null) {
                createHandler.free();
                createHandler = null;
            }
        };

        return {
            init: init,
            free: free
        };
    };

    return {
        Handler: handler
    };
})();