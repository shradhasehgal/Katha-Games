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
    {
        ev.target.appendChild(document.getElementById(data));
    }
    
};