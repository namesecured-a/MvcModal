MvcModal = window.MvcModal || {};
MvcModal.User.Create = MvcModal.User.Create || (function () {
    var handler = function (parameters) {
        var params = parameters;

        var initialize = function () {
            unsubscribeHandlers();
            subscribeHandlers();
            showDialog();
        };

        var dispose = function () {
            unsubscribeHandlers();
        };

        var subscribeHandlers = function () {
            onLoadedBsModal();
            onHiddenBsModal();
        };

        var unsubscribeHandlers = function () {
            $(params.submitButtonSelector).off('click');

            $(params.dialogFormSelector).off('loaded.bs.modal');
            $(params.dialogFormSelector).off('hidden.bs.modal');
        };

        var showDialog = function () {
            $(params.dialogFormSelector).modal({
                remote: params.dialogContentUri
            });
        };

        var onLoadedBsModal = function() {
            $(params.dialogFormSelector).on('loaded.bs.modal', function (e) {
                e.preventDefault();
                onSubmitClick();
                return false;
            });
        };

        var onSubmitClick = function () {
            $(params.submitButtonSelector).on('click', function (e) {
                $(params.dialogFormSelector).modal('hide');
            });
        };

        var onHiddenBsModal = function() {
            $(params.dialogFormSelector).on('hidden.bs.modal', function () {
                $(this).removeData('bs.modal');
            });
        };

        return {
            initialize: initialize,
            free: dispose
        };
    };

    return {
        Handler: handler
    };
})();