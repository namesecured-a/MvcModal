MvcModal = window.MvcModal || {};

MvcModal.Entity = MvcModal.Entity || (function() {
    return {};
})();

MvcModal.Entity.Create = MvcModal.Entity.Create || (function () {
    var dialog = function (parameters) {
        var self = this;

        var params = parameters.parameters;
        this.getInstance = parameters.getInstance;

        this.onLoad = function (e) {
            $(params.button.submit).on('click', self.onSubmitClicked);
            $(params.button.cancel).on('click', self.onCancel);
        };

        this.onSubmitCompleted = function(data, status, xhr) {
            if (!data.success) {
                $(params.dialog.id).html(data.html);
                self.onLoad();
            } else {
                $(params.dialog.list).html(data.html);
                $(params.dialog.id).dialog('close');
            }
        };

        this.onSubmitError = function(req) {

        };

        this.submit = function (instance) {
            var json = JSON.stringify(instance);
            $.ajax({
                type: 'POST',
                url: params.dialog.url,
                datatype: 'json',
                contentType: 'application/json: charset=utf-8',
                data: json,
                success: self.onSubmitCompleted,
                error: self.onSubmitError
            });
        };

        this.onSubmitClicked = function (e) {
            e.preventDefault();

            var instance = self.getInstance(params);
            self.submit(instance);

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
                resizable: true,
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