
var getBody = document.getElementsByTagName('body');
var getContainer = document.createElement('div');
getContainer.className = 'container';
document.body.appendChild(getContainer);

var getColorPal = document.createElement('div');
getColorPal.className = 'colorPal';
document.body.appendChild(getColorPal);

var btnBox = document.createElement('div');
btnBox.className = 'buttons';
document.body.appendChild(btnBox);

var eraseBtn = document.createElement('div');
eraseBtn.id = 'erase';
eraseBtn.innerHTML = 'ERASE';
btnBox.appendChild(eraseBtn);
eraseBtn.addEventListener('click', eraseColor);

var clearBtn = document.createElement('div');
clearBtn.id = 'clear';
clearBtn.innerHTML = 'CLEAR';
btnBox.appendChild(clearBtn);
clearBtn.addEventListener('click', clearAll);

var saveBtn = document.createElement('div');
saveBtn.id = 'save';
saveBtn.innerHTML = 'SAVE';
btnBox.appendChild(saveBtn);
saveBtn.addEventListener('click',savePix);

var loadBtn = document.createElement('div');
loadBtn.id = 'load';
loadBtn.innerHTML = 'LOAD';
btnBox.appendChild(loadBtn);
loadBtn.addEventListener('click',loadPix);

var palColors = ['blue','red','green','orange','yellow','purple', 'pink', 'navy','brown', 'white', 'gray', 'black'];

var colorStored;


for(var i=0; i<1100; i++){
var getGrid = document.createElement('div');
getGrid.className = 'grid';
getContainer.appendChild(getGrid);
getGrid.addEventListener('click', chgColor);
getGrid.addEventListener('mouseover', dragColor);
// getGrid.addEventListener('dblclick', stopColor);

}


for(var i=0; i<12; i++){
var getColors = document.createElement('div');
getColors.className = 'colors';
getColorPal.appendChild(getColors);
getColors.addEventListener('click', storeColor); 


for(var j =0; j<palColors.length; j++){
    getColors.style.backgroundColor += palColors[i]  
}
}

function storeColor(){
colorStored = event.target.style.backgroundColor;
}

function chgColor(){
event.target.style.backgroundColor = colorStored;
}

function eraseColor(){
colorStored = 'white';
event.target.style.backgroundColor = colorStored;
}

var allGrid = document.getElementsByClassName('grid');

var savedColors = [];

function clearAll(){
for(var i =0; i<allGrid.length; i++){
allGrid[i].style.backgroundColor = 'white';
}
}



function savePix(){
    for(var i = 0; i<allGrid.length; i++){
    allGrid[i].style.backgroundColor;
        savedColors.push(allGrid[i].style.backgroundColor)
    }
}

function loadPix(){
    for(var i = 0; i<allGrid.length; i++){
    allGrid[i].style.backgroundColor = savedColors[i];
    }
}



document.onmouseover = dragColor;function dragColor(){
    if(this.className === 'grid'){
    this.style.backgroundColor = colorStored;
    }
       
}

