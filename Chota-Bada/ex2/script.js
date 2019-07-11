function allowDrop(ev) {
    ev.preventDefault();
};

var count = 0;

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

function drop(ev, id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dat=parseInt(data);

    if(id == dat)
    {
        count++;
        ev.target.appendChild(document.getElementById(data));
        if(count==4)
        {
            $("#box1").hide();
            $("#box2").addClass("animated fadeInUp");
            $("#box2").show();

        }
    }
    
};