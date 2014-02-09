MvcModal = window.MvcModal || {};
MvcModal.Album = MvcModal.Album || {};

MvcModal.Album.Create = MvcModal.Album.Create || (function() {
    var getInstance = function(parameters) {
        return {
            Id: 0,
            Artist: 'Long name',
            Genre: 'Chillout'
        };
    };

    return {
        Initialize: function(parameters) {
            parameters.delegate.instance = getInstance;
            var handler = new MvcModal.Entity.Create(parameters);
            handler.Initialize();
        }
    };
})();