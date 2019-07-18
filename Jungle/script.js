var deets =[[3584,1958], [626,1982], [3708,370],[1953,2435],[1743,1034] ];

function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var wmap;
    if(95/100*w > 700)
        wmap = 700;

    else wmap = 95/100*w;
    var hmap = 4961/3508*wmap;
    $("#forest").css({   
        "width": wmap, 
        "height": hmap
    });

    var smol = 7/80*hmap;
    $(".smol").css({   
        "width": smol, 
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