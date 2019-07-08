$(document).ready(function(){
    
    $("img").click(function(){
        var id = $(this).attr('id');
        if(id == 1)
            $('#aan').css('background-image','url(\'images/1.jpg\')');
        else if(id == 2)
            $('#aan').css('background-image','url(\'images/2.jpg\')');
        else if(id == 3)
            $('#aan').css('background-image','url(\'images/3.jpg\')');
        else if(id == 4)
            $('#aan').css('background-image','url(\'images/4.jpg\')');
        
    });
});