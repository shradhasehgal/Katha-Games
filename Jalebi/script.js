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
    if(id == dat){
        count++;
        $("#"+data).css({   
            'border': '6px solid green',
            'border-radius': '50%'
        });
        
        $("#"+data).closest('li').css({
            'color': 'green',
            'background': 'green'
        });

        ev.target.appendChild(document.getElementById(data));    
    }

    if(count==6)
    {
        swal("Congrats!", ", Your account is created!", "success");
    }
};