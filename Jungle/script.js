var deets =[[100,1958], [2626,1982], [3708,150],[1753,2735],[1743,1034] ];

function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var wmap;
    if(95/100*w > 1100)
        wmap = 1100;

    else wmap = 95/100*w;
    var hmap = 3508/4961*wmap;
    $("#forest").css({   
        "width": wmap, 
        "height": hmap
    });

    var smol = 13/80*hmap;
    $("#5").css({   
        "width": smol, 
    });

    $("#3").css({   
        "width": 17/80*hmap, 
    });

    $("#1").css({   
        "width": 40/80*hmap, 
    });

    $("#2").css({   
        "width": 32/80*hmap, 
    });

    $("#4").css({   
        "width": 21/80*hmap, 
    });

    var i;
    for(i=1; i<=5; i++)
    {
        $("#"+i).css({    
            "left": wmap*deets[i-1][0]/4961,
            "top": hmap*deets[i-1][1]/3508,
        });
    }
}

$(document).ready(function(){
    myFunction();
});