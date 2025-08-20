const pi = Math.PI
let calculateButton = document.getElementById("calculate")
let valSzeszButton = document.getElementById("valSzeszButton")
let higitasKalkButton = document.getElementById("higitasKalkButton")

let diameterInput = document.getElementById("diameter")
let alcoholDegreeInput = document.getElementById("alcohol-degree")
let heightInput = document.getElementById("height")

let originalVolumeOutput = document.getElementById("original-volume")
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

    let volume = pi * ((diameter / 2) ** 2) * height // mm^3
    volume = volume / 1000000 // dm^3
    let modifiedVolume = (volume * degree) / 25

    pointFivePercent = ((modifiedVolume / 100) * 0.5) * 10
    threePercent = ((modifiedVolume / 100) * 3) * 10

    originalVolumeOutput.innerHTML = volume.toFixed(2)
    volumeOutput.innerHTML = modifiedVolume.toFixed(2)
    pointFiveDlOutput.innerHTML = pointFivePercent.toFixed(2)
    pointFiveLOutput.innerHTML = (pointFivePercent / 10).toFixed(2)
    threeDlOutput.innerHTML = threePercent.toFixed(2)
    threeLOutput.innerHTML = (threePercent / 10).toFixed(2)
    eloparlatOutput.innerHTML = threePercent.toFixed(2)
})

valSzeszButton.addEventListener("click", (event) => {
    window.open("https://kalkulator.evinfo.hu/kalkulator/palinka/valodi-szeszfok", "_blank");
})

higitasKalkButton.addEventListener("click", (event) => {
    window.open("https://kalkulator.evinfo.hu/kalkulator/palinka/higitas", "_blank");
})



// L * valodi szeszfok, ezt /25-tel; Ennek a számnak kell a 0.5% és 3%