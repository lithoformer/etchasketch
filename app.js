let size = 16;
let containerSide = 1000;
let divSize = containerSide/size;
const rgb = 255;
let arr = [];

const container = document.querySelector('.container');
container.style.maxWidth = containerSide+'px';
container.style.maxHeight = containerSide+'px';

container.style.display='flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.flexWrap = 'wrap';
container.style.alignItems = 'center';

const body = document.querySelector('body');

body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'space-evenly';

const button = document.createElement('button');
button.classList.add('reset');
button.textContent = 'Reset';
button.style.marginBottom = '50px';
body.appendChild(button);
body.insertBefore(button,container);


const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Etch-A-Sketch';

body.appendChild(title);
body.insertBefore(title,button);

let grid = document.querySelectorAll('.grid');

button.addEventListener('click', reset);

function reset(){
    do{
        size = parseInt(prompt('Please enter a number between 1 and 100'));
    }while (size > 100 || size < 1);

     for (let i = 0;i< grid.length; i++)
        {
                container.removeChild(grid[i]);
        }

        drawBoard();
}

function drawBoard(){

    divSize = containerSide/size;

    for (let i = 0;i < size;i++)
        {
            for (let j = 0;j < size;j++)
            {
                container.innerHTML += `<div class="grid"></div>`;
                arr.push({setColor:false,opacity:0});
            }
        }

        grid = document.querySelectorAll('.grid');

    for (let i = 0;i< grid.length; i++)
        {
            grid[i].style.border = '1px solid black';
            grid[i].style.boxSizing= 'border-box';
            grid[i].style.width = divSize+'px';
            grid[i].style.height = divSize+'px';
            grid[i].style.display='flex';
            grid[i].addEventListener('mouseover', function(e){
                if(arr[i].setColor === false)
                {
                const r = getRandom(rgb);
                const g = getRandom(rgb);
                const b = getRandom(rgb);
                e.currentTarget.style.backgroundColor = `rgb(${r},${g},${b})`;
                arr[i].setColor = true;
                }
                e.currentTarget.style.opacity = `${arr[i].opacity}`;
                arr[i].opacity += .1;
            });
        }
}

function getRandom(val)
{
    return Math.floor(Math.random() * val);
}

reset();