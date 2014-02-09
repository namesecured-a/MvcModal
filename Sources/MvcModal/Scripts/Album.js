MvcModal = window.MvcModal || {};
MvcModal.Album = MvcModal.Album || (function () {
    var initialize = function(parameters) {
        MvcModal.Album.Create.Handler(parameters.create);
    };

    return {
        Initialize: initialize
    };
})();