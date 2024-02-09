function alertColor() {
    alert(`Lapis Lazuli`)
}

function alertPlace() {
    alert(`Bed`)
}

function alertRitual() {
    alert(`Youtube before bed`)
}

// function playAudio(file) {
//     new Audio(file).play()
// }


document.getElementById(`color`).addEventListener(`click`, alertColor)
document.getElementById(`place`).addEventListener(`click`, alertPlace)
document.getElementById(`ritual`).addEventListener(`click`, alertRitual)


