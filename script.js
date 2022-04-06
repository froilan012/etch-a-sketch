const container = document.querySelector('.container');

var value = 50; //prompt("Enter value upto 100");
var sizeRef = 100/value;
var size = JSON.stringify(sizeRef)+"%";

for (var i=0; i<value*value; i++){
    const blocks = document.createElement('div');
    blocks.setAttribute('id', 'blocks');
    blocks.setAttribute('class', "box "+ i);
    blocks.style.width = size;
    container.appendChild(blocks);

    var myArr = [];

    blocks.addEventListener('mousedown', () => {
        myArr.pop();
        myArr.unshift(1);
        console.log(myArr[0]);
    });
    blocks.addEventListener('mouseup', () => {
        myArr.pop();
        myArr.unshift(0);
        console.log(myArr[0]);
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

/* const btn = document.querySelector('#box');
btn.addEventListener('click', () => {
    console.log('hey');
}); */