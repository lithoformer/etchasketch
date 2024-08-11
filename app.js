let size = 16;
let containerSide = 1000;
let divSize = containerSide/size;

const container = document.querySelector('.container');
container.style.maxWidth = containerSide+'px';
container.style.maxHeight = containerSide+'px';
container.style.marginLeft = (containerSide/2)+'px';
container.style.marginTop = (containerSide/5)+'px';

const body = document.querySelector('body');

const button = document.createElement('button');
button.classList.add('reset');
body.appendChild(button);
body.insertBefore(button,container);

button.style.position = 'absolute';
button.style.top = '50px';
button.style.left = containerSide+'px';
button.textContent = 'Reset';

for (let i = 0;i < size;i++)
{
    for (let j = 0;j < size;j++)
    {
        container.innerHTML += `<div class="grid"></div>`;
    }
}

let grid = document.querySelectorAll('.grid');

for (let i = 0;i< grid.length; i++)
{
    grid[i].style.border = '1px solid black';
    grid[i].style.boxSizing= 'border-box';
    grid[i].style.width = divSize+'px';
    grid[i].style.height = divSize+'px';
    grid[i].style.display='flex';
    grid[i].addEventListener('mouseover',function (e){
        e.currentTarget.style.backgroundColor = 'black';
    });
}

container.style.display='flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.flexWrap = 'wrap';
container.style.alignItems = 'center';

button.addEventListener('click', reset);

function reset(){
    do{
        size = parseInt(prompt('Please enter a number between 1 and 100'));
    }while (size > 100 || size < 1);

     for (let i = 0;i< grid.length; i++)
        {
                container.removeChild(grid[i]);
        }

        divSize = containerSide/size;

        drawBoard();
}

function drawBoard(){

    for (let i = 0;i < size;i++)
        {
            for (let j = 0;j < size;j++)
            {
                container.innerHTML += `<div class="grid"></div>`;
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
            grid[i].addEventListener('mouseover',function (e){
                e.currentTarget.style.backgroundColor = 'black';
            });
        }
}