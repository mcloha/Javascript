$(function(){
    $(window).keypress(function (e){
        if(e.keyCode===13)
            {
                newItem();
            }
    });
    $('ul').on('click','li',function(e){
        $(e.target).remove();
    });
    function newItem(){
        var item = $('input').val();
        $('ul').append('<li>'+ item + ',' + '</li>');
        $('input').val('');
    };
});