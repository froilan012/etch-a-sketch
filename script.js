const container = document.querySelector('.container');
const output = document.querySelector('output');
const slideValue = document.getElementById("slider");
var myArr = [];
var myColor = [2];

function grids(grid) {
    var sizeRef = 100/grid;
    var size = JSON.stringify(sizeRef)+"%";
    for (var i=0; i<grid*grid; i++){
        const blocks = document.createElement('div');
        blocks.setAttribute('id', 'box' + (i+1));
        blocks.setAttribute('class', 'blocks');
        blocks.style.width = size;
        container.appendChild(blocks);
        blocks.style.backgroundColor = 'white';

        blocks.addEventListener('mousedown', () => {
            myArr.pop();
            myArr.push(1);
        });
        blocks.addEventListener('mouseup', () => {
            myArr.pop();
            myArr.push(0);
        });

        const rgb = document.getElementById('rgb');
        rgb.addEventListener('mousedown', () => {
            myColor.pop();
            myColor.push(1);
        });

        const blk = document.getElementById('blk');
        blk.addEventListener('mousedown', () => {
            myColor.pop();
            myColor.push(2);
        });

        const wht = document.getElementById('wht');
        wht.addEventListener('mousedown', () => {
            myColor.pop();
            myColor.push(3);
        });

        const reset = document.getElementById('clear-board');
        reset.addEventListener('mousedown', () => {
            blocks.style.backgroundColor = 'white';
            reset.style.backgroundColor = 'yellow';
        });
        reset.addEventListener('mouseup', () => {
            reset.style.backgroundColor = 'rgb(0, 140, 255)';
        });
        reset.addEventListener('mouseleave', () => {
            reset.style.backgroundColor = 'rgb(0, 140, 255)';
        });

        rgb.addEventListener('click', () => {
            blk.style.backgroundColor = 'rgb(0, 140, 255)';
            rgb.style.backgroundColor = 'yellow';
            wht.style.backgroundColor = 'rgb(0, 140, 255)';
        });

        blk.addEventListener('click', () => {
            blk.style.backgroundColor = 'yellow';
            rgb.style.backgroundColor = 'rgb(0, 140, 255)';
            wht.style.backgroundColor = 'rgb(0, 140, 255)';
        });

        wht.addEventListener('click', () => {
            blk.style.backgroundColor = 'rgb(0, 140, 255';
            rgb.style.backgroundColor = 'rgb(0, 140, 255)';
            wht.style.backgroundColor = 'yellow';
        });

        function pen() {
            if (myColor[0]==1) {
                var a = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                var c = Math.floor(Math.random() * 255);
                var color = "rgb(" + a + ' ' + b + ' ' + c + ")";
                return color;
            }
            if (myColor[0]==2) {
                color = 'black';
                return color;
            }
            if (myColor[0]==3) {
                color = 'white';
                return color;
            }
        }

        blocks.addEventListener('mousedown', () => {
            if (myArr[0] == 1) {
                blocks.style.backgroundColor = pen();
            }
        });

        blocks.addEventListener('mouseover', () => {
            if (myArr[0] == 1) {
                blocks.style.backgroundColor = pen();
            }
        });
        container.addEventListener('mouseleave', () => {
            myArr.pop();
        });
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

window.addEventListener('load', () => {
    grids(25);
    output.innerHTML = "25 X 25";
});

slideValue.addEventListener("change", () => {
    removeAllChildNodes(container);
    grids(slideValue.value);
});

slideValue.addEventListener('input', () => {
    output.innerHTML = slideValue.value + " X " +  slideValue.value;
})