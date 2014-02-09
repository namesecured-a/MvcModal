MvcModal = window.MvcModal || {};
MvcModal.Album.Create = MvcModal.Album.Create || (function () {
    var self = this;

    this.getInstance = function (parameters) {
        var params = parameters;
        
        var instance = {
            Id: 0,
            Artist: 'Long name',
            Genre: 'Chillout'
        };

        return instance;
    };

    var handler = function (parameters) {
        parameters.delegate.getInstance = self.getInstance;
        var createHandler = new MvcModal.Entity.Create.Handler(parameters);
        createHandler.init();
    };

    return {
        Handler: handler
    };
})();