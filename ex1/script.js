var deets =[[2760,1140], [1480,800], [870,1270],[1360,2280],[880,2475] ];

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

    var smol = 7/80*hmap;
    $(".smol").css({   
        "width": smol, 
        "height": smol
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

function allowDrop(ev) {
    ev.preventDefault();
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

function drop(ev, id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dat=parseInt(data);

    if(id == dat)
        ev.target.appendChild(document.getElementById(data));
    
};
