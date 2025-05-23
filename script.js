$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        console.log("envelope clicked");
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass('open')
            .removeClass('close');
        btn_open.hide();
        btn_close.show();
    }

    function close() {
        envelope.addClass('close')
            .removeClass('open');
        btn_open.show();
        btn_close.hide();
    }


})