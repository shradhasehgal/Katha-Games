var deets =[[2842,1273], [1566,935], [950,1400],[1460,2425],[972,2616] ];

function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var wmap;
    if(9/10*w > 700)
        wmap = 700;

    else wmap = 9/10*w;
    var hmap = 4008/3508*wmap;
    $("#map").css({   
        "width": wmap, 
        "height": hmap
    });

    var i;
    for(i=1; i<=5; i++)
    {
        $("#"+i).css({    
            "left": wmap*deets[i-1][0]/3508,
            "top": hmap*deets[i-1][1]/4008,
        });
    }
}

$(document).ready(function(){
    myFunction();
});