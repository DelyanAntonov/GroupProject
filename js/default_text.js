

$(document).ready(function() {
    var defaultMessage = "     * Leave a comment here *";
    $("textarea").focus(function(){
        if( $(this).val() == defaultMessage){
            $(this).val("");
        }
    }).blur(function(){
        if( $(this).val() == "" ){
            $(this).val(defaultMessage);
        }
    }).val(defaultMessage);
});
