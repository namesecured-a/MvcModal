MvcModal = window.MvcModal || {};
MvcModal.Album.Create = MvcModal.Album.Create || (function () {
    var dialog = function(parameters) {
        var params = parameters;

        var show = function() {
            alert('create user dialog');
        };

        var hide = function() {
            
        };

        return {
            show: show,
            hide: hide
        };
    };

    var handler = function(parameters) {
        var params = parameters;
        var modal = null;

        var init = function () {
            $(params.button.create).on('click', function(e) {
                e.preventDefault();

                modal = new dialog(params);
                modal.show();

                return;
            });
        };

        var free = function() {
            if (dialog !== null) {
                modal.hide();
                modal = null;
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