$(document).ready(function(){

    var m0 =  "Yayy! By cleaning the waterbody, you have given Aan fresh drinking water!"
    var m1 = "Nooooo! The poacher is after Aan's ivory tusks!";
    var m2 = "Congrats! By planting more trees, you have saved Aan!";
    
    $("img").click(function(){
        var id = $(this).attr('id');
        var message; 
        if(id == 1)
        {
            message = m1;
            $('#'+id).css({
                'border': '10px solid red',
                'border-radius' : '100%',
            });
        }

        else
        {
            if(id==0)
                message = m0;
            else message = m2;
            $('#'+id).css({
                'border': '10px solid green',
                'border-radius' : '100%',
            });
        }
        document.getElementById("legend").innerHTML = message;
        $("#info").css("display", "flex");

        
        var change = 'ans'+ id;
        $('#'+change).show();
        del1 = (id + 1)%3;
        del2 = (id + 2)%3;
        $('#'+del1).css({
            'border': 'none',
        });
        $('#'+del2).css({
            'border': 'none',
        });

        del1 = 'ans' + del1;
        del2 = 'ans' + del2;
        $('#'+del1).hide();
        $('#'+del2).hide();
    });
});