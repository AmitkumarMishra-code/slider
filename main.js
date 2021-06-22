let selectedElement = document.querySelector('.selected')
let controlKnob = document.querySelector('.knob')
let valueText = document.querySelector('.value')
let sliderContainer = document.querySelector('.slider-container')

controlKnob.addEventListener('mousedown', mouseDownHandler)
controlKnob.addEventListener('mouseup', mouseUpHandler)

let initialPosition = 0;
valueText.innerText = 'Value: 0'

function mouseMoveHandler(e) {
    controlKnob.style.left = `${(controlKnob.offsetLeft + e.clientX) - initialPosition}px`
    if (controlKnob.offsetLeft < 0) {
        controlKnob.style.left = '0px'
    } else if (controlKnob.offsetLeft > sliderContainer.clientWidth - controlKnob.clientWidth) {
        controlKnob.style.left = `${sliderContainer.clientWidth - controlKnob.clientWidth}px`
    }
    selectedElement.style.width = controlKnob.offsetLeft + 'px'
    valueText.innerText = `Value: ${Math.floor((selectedElement.clientWidth / (sliderContainer.clientWidth-controlKnob.clientWidth))*100)}`
    initialPosition = e.clientX
}

function mouseDownHandler(e) {
    initialPosition = e.clientX;
    console.log(initialPosition)
    controlKnob.addEventListener('mousemove', mouseMoveHandler)
}

function mouseUpHandler(e) {
    controlKnob.removeEventListener('mousemove', mouseMoveHandler)
}