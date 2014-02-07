MvcModal = window.MvcModal || {};
MvcModal.User = MvcModal.User || (function () {
    var userHandler = function (parameters) {
        var params = parameters.createUserParams;

        var onCreateUserClicked = function(e, url) {
            e.preventDefault();

            $(params.dialogFormSelector).on('loaded.bs.modal', function() {
                $(params.submitButtonSelector).on('click', function() {
                    $(params.dialogFormSelector).modal('hide');
                });
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