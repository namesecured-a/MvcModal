MvcModal = window.MvcModal || {};
MvcModal.Album.Create = MvcModal.Album.Create || (function () {
    var handler = function(parameters) {
        var params = parameters;
        var dialog = null;

        var init = function () {
            $(params.button.create).on('click', function(e) {
                e.preventDefault();

                dialog = new MvcModal.Album.Create.Dialog(params);
                dialog.show();

                return;
            });
        };

        var free = function() {
            if (dialog !== null) {
                dialog.hide();
                dialog = null;
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