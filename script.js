const pi = Math.PI
let calculateButton = document.getElementById("calculate")
let diameterInput = document.getElementById("diameter")
let alcoholDegreeInput = document.getElementById("alcohol-degree")
let heightInput = document.getElementById("height")

let volumeOutput = document.getElementById("volume")
let pointFiveDlOutput = document.getElementById("point-five-dl")
let pointFiveLOutput = document.getElementById("point-five-l")
let threeDlOutput = document.getElementById("three-dl")
let threeLOutput = document.getElementById("three-l")
let eloparlatOutput = document.getElementById("eloparlat")

calculateButton.addEventListener("click", (event) => {
    let diameter = diameterInput.value
    let height = heightInput.value
    let degree = alcoholDegreeInput.value
    let pointFivePercent = 0.5
    let threePercent = 3

    let volume = pi * (diameter ** 2) * height // mm^3
    volume = volume / 1000000 // dm^3
    let modifiedVolume = (volume * degree) / 25

    pointFivePercent = modifiedVolume * 0.005
    threePercent = modifiedVolume * 0.03

    volumeOutput.innerHTML = modifiedVolume.toFixed(2) + " dm<sup>3</sup>"
    pointFiveDlOutput.innerHTML = pointFivePercent.toFixed(2) + " dl"
    pointFiveLOutput.innerHTML = pointFivePercent.toFixed(2) / 10 + " l"
    threeDlOutput.innerHTML = threePercent.toFixed(2) + " dl"
    threeLOutput.innerHTML = threePercent.toFixed(2) / 10 + " l"
    eloparlatOutput.innerHTML = modifiedVolume.toFixed(2) + " l"
})

// L * valodi szeszfok, ezt /25-tel; Ennek a számnak kell a 0.5% és 3%