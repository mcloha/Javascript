$(function(){
    var counter = 0;
    $('#header').html(localStorage['header'] || 'This is an editable header');
    $('#content').html(localStorage['content'] || 'This is an editable content');
    
    setInterval(function(){
        $('#counter').html('The content saved' + ' ' + counter++ + ' ' + 'times');
        localStorage['header'] = $('#header').html();
        localStorage['content'] = $('#content').html();
    },1000);
    
});