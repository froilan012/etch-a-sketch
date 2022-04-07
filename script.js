const container = document.querySelector('.container');

const output = document.querySelector('output');

const slideValue = document.getElementById("slider");


window.addEventListener('load', () => {
    var grid = 20;
    var sizeRef = 100/grid;
    var size = JSON.stringify(sizeRef)+"%";

    for (var i=0; i<grid*grid; i++){
        const blocks = document.createElement('div');
        blocks.setAttribute('id', 'blocks');
        blocks.setAttribute('class', "box "+ i);
        blocks.style.width = size;
        container.appendChild(blocks);
        blocks.style.backgroundColor = 'white';

        var myArr = [];
        var myColor = [2];

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
        

        output.innerHTML = "20 X 20";
        }
    })

slideValue.addEventListener("change", () => {
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
        blocks.style.width = size;
        container.appendChild(blocks);
        blocks.style.backgroundColor = 'white';

        var myArr = [];
        var myColor = [2];

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
    }
});

slideValue.addEventListener('input', () => {
    output.innerHTML = slideValue.value + " X " +  slideValue.value;
})


/* const reset = document.getElementById('clear-board');
reset.addEventListener('click', () =>{
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
}) */