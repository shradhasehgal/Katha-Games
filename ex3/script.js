$(document).ready(function(){
    $("img").click(function(){
        var id = $(this).attr('id');
        
        if(id == 1)
        {
            $('#'+id).css({
                'border': '10px solid red',
                'border-radius' : '100%',
            });
        }

        else
        {
            $('#'+id).css({
                'border': '10px solid green',
                'border-radius' : '100%',
            });
        }

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