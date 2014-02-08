MvcModal = window.MvcModal || {};
MvcModal.Album.Create = MvcModal.Album.Create || (function () {
    var album = function (parameters) {
        var params = parameters;

        var submit = function() {
            return {
                success: false,
                html: '<p>Completed</p>'
            };
        };

        return {
            submit: submit
        };
    };

    var dialog = function (parameters) {
        var self = this;
        var params = parameters;

        this.onLoad = function (e) {
            $(params.button.submit).on('click', self.onSubmit);
            $(params.button.cancel).on('click', self.onCancel);
        };

        this.onSubmit = function (e) {
            e.preventDefault();
            var a = new album(params);
            var submit = a.submit();
            if (submit.success) {
                $(params.dialog.id).dialog('close');
            } else {
                $(params.dialog.id).html(submit.html);
            }

            return false;
        };

        this.onCancel = function (e) {
            e.preventDefault();
            $(params.dialog.id).dialog('close');
            return false;
        };

        this.onOpen = function (event, ui) {
            $(params.dialog.id).load(params.dialog.url, self.onLoad);
        };

        this.onClose = function(event, ui) {
            $(params.button.submit).off('click');
            $(params.button.cancel).off('click');
        };

        var show = function () {
            $(params.dialog.id).dialog({
                title: 'Create Album',
                autoOpen: false,
                resizable: false,
                modal: true,
                draggable: false,
                open: self.onOpen,
                close: self.onClose
            });

            $(params.dialog.id).dialog('open');
        };

        return {
            show: show
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

                return false;
            });
        };
        
        return {
            init: init
        };
    };

    return {
        Handler: handler
    };
})();