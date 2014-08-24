$(function() {
    $('select').change(function() {
        var val = $(this).val();
        if (val) {
            $('.tips:not(#tips' + val + ')').slideUp();
            $('#tips' + val).slideDown();
        } else {
            $('.tips').slideDown();
        }
    });
});