function allowDrop(event){event.preventDefault();}
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    var id = event.target.id;
    // Store the data in localStorage
    localStorage.setItem('droppedData', data);
    localStorage.setItem('droppedDataId', id);
}
