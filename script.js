
let numberOfBlocks = 16;

const gridSlider = document.getElementById('gridSlider');                       // input tag grid slider
const gridSizeInfo = document.getElementById('rangeValue');                     // displayed value for slider

const gridContainer = document.querySelector('.grid__container');               
const updateGridButton = document.querySelector('.changeGridSize');                   // button to change grid size

const colorButtons = document.querySelectorAll('.grid__settings__color__option');

let highlightColor = "black";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const highlight = document.querySelector('.highlight');


gridContainer.style.gridTemplateColumns = 'repeat(2, auto)';

gridSlider.addEventListener('change', updateSliderInformation);

generateGrid();

function updateSliderInformation() {
    let val = document.getElementById('gridSlider').value;
    gridSizeInfo.textContent = `${gridSlider.value} x ${gridSlider.value}`;
    numberOfBlocks = gridSlider.value;
}

function generateGrid() {

    let blockElements = document.querySelectorAll('.grid__child');

    blockElements.forEach(blockElement => {
        blockElement.remove();
    });


    for (let i = 0; i < numberOfBlocks * numberOfBlocks; i++) {
        let block = document.createElement('div');
        block.classList.add('grid__child');
        block.classList.add(`grid__child${i}`);
        gridContainer.appendChild(block);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${numberOfBlocks}, auto)`;

    const gridBlocks = document.querySelectorAll('.grid__child');

    for (let i = 0; i < gridBlocks.length; i++){
        gridBlocks[i].addEventListener('mouseover', () => {

            if (highlightColor == "black"){
                gridBlocks[i].style.backgroundColor = "black";
            }
            else if (highlightColor == "random"){
                console.log(rainbowColor());
                gridBlocks[i].style.backgroundColor = rainbowColor();
            }
        });
    }

updateGridButton.addEventListener('mousedown', generateGrid);

}


for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', () => {
        
        // let highlight = document.querySelectorAll('.highlight');
        
            if (i == 0){
                highlightColor = "black";
                }
                
            if (i == 1){
                console.log("RANDOM");
                highlightColor = "random";
            }
            
    });
}

function rainbowColor() {
    return `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
}



