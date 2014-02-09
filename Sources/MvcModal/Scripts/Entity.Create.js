MvcModal = window.MvcModal || {};
MvcModal.Entity = MvcModal.Entity || {};

MvcModal.Entity.Create = function (parameters) {
    var params = parameters;

    this.Initialize = function () {
        $(params.button.open).on('click', function (e) {
            e.preventDefault();

            var modal = new MvcModal.Entity.Create.Dialog(params);
            modal.show();

            return false;
        });
    };
};
    
MvcModal.Entity.Create.Dialog = function (parameters) {
    var params = parameters;
    var instance = params.delegate.instance;
    var submit = params.delegate.submit || MvcModal.Entity.Create.Dialog.Submit;

    this.show = function () {
        $(params.dialog.id).dialog({
            title: params.dialog.title,
            autoOpen: false,
            resizable: true,
            modal: true,
            draggable: false,
            open: onOpen,
            close: onClose
        });

        $(params.dialog.id).dialog('open');
    };

    var onLoad = function (e) {
        $(params.button.submit).on('click', onSubmit);
        $(params.button.cancel).on('click', onCancel);
    };

    var onSubmit = function (e) {
        e.preventDefault();

        submit({
            url: params.dialog.url,
            instance: instance(params),
            success: onSuccess,
            error: onError
        });

        return false;
    };

    var onCancel = function (e) {
        e.preventDefault();
        $(params.dialog.id).dialog('close');
        return false;
    };

    var onSuccess = function (data, status, xhr) {
        if (!data.success) {
            $(params.dialog.id).html(data.html);
            onLoad();
        } else {
            $(params.dialog.updateId).html(data.html);
            $(params.dialog.id).dialog('close');
        }
    };

    var onError = function (req) {

    };

    var onOpen = function (event, ui) {
        $(params.dialog.id).load(params.dialog.url, onLoad);
    };

    var onClose = function (event, ui) {
        $(params.button.submit).off('click');
        $(params.button.cancel).off('click');
    };
};

MvcModal.Entity.Create.Dialog.Submit = function(parameters) {
    var url = parameters.url;
    var instance = parameters.instance;
    var success = parameters.success;
    var error = parameters.error;
    var json = JSON.stringify(instance);
    $.ajax({
        type: 'POST',
        url: url,
        datatype: 'json',
        contentType: 'application/json: charset=utf-8',
        data: json,
        success: success,
        error: error
    });
};