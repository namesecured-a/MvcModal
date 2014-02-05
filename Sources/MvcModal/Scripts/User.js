MvcModal = window.MvcModal || {};
MvcModal.User = MvcModal.User || (function () {
    var userHandler = function (parameters) {
        var params = parameters.createUserParams;

        var onCreateUserClicked = function(e, url) {
            e.preventDefault();
            $(params.createUserDialogSelector).modal({
                remote: params.createUserDialogContentUrl
            });
        };

        var unsubscribeHandlers = function() {

        };

        var subscribeHandlers = function() {
            $(params.createUserButtonSelector).on('click', function (e) {
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