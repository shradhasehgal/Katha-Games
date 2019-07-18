var deets =[[2760,1140], [1480,800], [870,1270],[1360,2280],[880,2475] ];

function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var wmap;
    if(95/100*w > 700)
        wmap = 700;

    else wmap = 95/100*w;
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
var count = 0;
function drop(ev, id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dat=parseInt(data);

    if(id == dat)
    {
        count++;
        var i = $("#"+data).parent().parent();
        ev.target.appendChild(document.getElementById(data));
        var d = i.find("td:eq(1)").text();
        var node = document.createElement("P");
        // Create a <li> node
        var textnode = document.createTextNode(d);
        node.appendChild(textnode); 
        ev.target.append(node);
        console.log(d);
        i.remove();
    }

    if(count==5)
    {
        swal("Congrats!", "You have placed all the legends at the correct positions!","success")
            .then((value) => {
                window.location.reload();
            });
    }

    console.log(count);
    
};
