MvcModal = window.MvcModal || {};
MvcModal.User = MvcModal.User || (function () {
    var userHandler = function (parameters) {
        var params = parameters.createUserParams;

        var onCreateUserClicked = function(e, url) {
            e.preventDefault();

            $(params.dialogFormSelector).on('loaded.bs.modal', function() {
                $(params.submitButtonSelector).on('click', function () {
                    $(params.dialogFormSelector).modal('hide');
                });
            });

            // Twitter bootstrap remote modal shows same content everytime
            // http://stackoverflow.com/questions/12286332/twitter-bootstrap-remote-modal-shows-same-content-everytime
            $(params.dialogFormSelector).on('hidden.bs.modal', function () {
                $(this).removeData('bs.modal');
            });

            $(params.dialogFormSelector).modal({
                remote: params.dialogContentUri
            });
        };

        var unsubscribeHandlers = function() {

        };

        var subscribeHandlers = function() {
            $(params.createButtonSelector).on('click', function (e) {
                var url = $(this).attr('href');
                onCreateUserClicked(e, url);
                return false;
            });
        };

        return {
            initialize: function () {
                unsubscribeHandlers();
                subscribeHandlers();
            }
        };
    };

    return {
        Handler: userHandler
    };
})();