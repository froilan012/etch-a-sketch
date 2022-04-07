const container = document.querySelector('.container');

const output = document.querySelector('output');

const slideValue = document.getElementById("slider");

window.addEventListener('load', () => {
    var grid = 50;
    var sizeRef = 100/grid;
    var size = JSON.stringify(sizeRef)+"%";

    for (var i=0; i<grid*grid; i++){
        const blocks = document.createElement('div');
        blocks.setAttribute('id', 'blocks');
        blocks.setAttribute('class', "box "+ i);
        blocks.setAttribute('draggable', 'false');
        blocks.style.width = size;
        container.appendChild(blocks);

        var myArr = [];

        blocks.addEventListener('mousedown', () => {
            myArr.pop();
            myArr.unshift(1);
        });
        blocks.addEventListener('mouseup', () => {
            myArr.pop();
            myArr.unshift(0);
        });

        blocks.addEventListener('mouseover', () => {
            if (myArr[0] == 1) {
                blocks.style.backgroundColor = 'black';
            }
        });
        blocks.addEventListener('mousedown', () => {
            if (myArr[0] == 1) {
                blocks.style.backgroundColor = 'black';
            }
        });
        output.innerHTML = "50 X 50";
        }
    })

slideValue.addEventListener("input", () => {
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(container);

    grid = slideValue.value;
    var sizeRef = 100/grid;
    var size = JSON.stringify(sizeRef)+"%";

    for (var i=0; i<grid*grid; i++){
        const blocks = document.createElement('div');
        blocks.setAttribute('id', 'blocks');
        blocks.setAttribute('class', "box "+ i);
        blocks.setAttribute('draggable', 'false');
        blocks.style.width = size;
        container.appendChild(blocks);

        var myArr = [];

        blocks.addEventListener('mousedown', () => {
            myArr.pop();
            myArr.unshift(1);
        });
        blocks.addEventListener('mouseup', () => {
            myArr.pop();
            myArr.unshift(0);
        });

        blocks.addEventListener('mouseover', () => {
            if (myArr[0] == 1) {
                blocks.style.backgroundColor = 'black';
            }
        });
        blocks.addEventListener('mousedown', () => {
            if (myArr[0] == 1) {
                blocks.style.backgroundColor = 'black';
            }
        });
        }
    output.innerHTML = slideValue.value + " X " +  slideValue.value;
    //console.log(slideValue.value)    
    }
);
