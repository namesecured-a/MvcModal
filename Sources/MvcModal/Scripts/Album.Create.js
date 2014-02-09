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

    this.submit = function (parameters) {
        var url = parameters.url;
        var instance = parameters.instance;
        var success = parameters.success;
        var error = parameters.error;
        var json = JSON.stringify(instance);
        $.ajax({
            type: 'POST',
            url: url,
            datatype: 'json',
            contentType: 'application/json: charset=utf-8',
            data: json,
            success: success,
            error: error
        });
    };

    var handler = function (parameters) {
        parameters.delegate.getInstance = self.getInstance;
        parameters.delegate.submit = self.submit;
        var createHandler = new MvcModal.Entity.Create.Handler(parameters);
        createHandler.init();
    };

    return {
        Handler: handler
    };
})();