$(document).ready(function(){
    $('a').on('click',function(event){
        //alert("gfch");
        event.preventDefault();
        var url=$(this).attr('href');
        $('.container').remove();
        $('#p').load(url).hide().fadeIn('slow');

    })
    
});