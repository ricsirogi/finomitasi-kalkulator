const pi = Math.PI
let calculateButton = document.getElementById("calculate")
let valSzeszButton = document.getElementById("valSzeszButton")
let higitasKalkButton = document.getElementById("higitasKalkButton")

let dateP = document.getElementById("date")

let diameterInput = document.getElementById("diameter")
let alcoholDegreeInput = document.getElementById("alcohol-degree")
let heightInput = document.getElementById("height")

let errorP = document.getElementById("error")
let originalVolumeOutput = document.getElementById("original-volume")
let volumeOutput = document.getElementById("volume")
let pointFiveDlOutput = document.getElementById("point-five-dl")
let pointFiveLOutput = document.getElementById("point-five-l")
let threeDlOutput = document.getElementById("three-dl")
let threeLOutput = document.getElementById("three-l")
let eloparlatOutput = document.getElementById("eloparlat")

function logDate() {
  const now = new Date();

  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');

  dateP.innerHTML = (`${yyyy}. ${mm}. ${dd}. ${hh}:${min}`);
}

logDate()
setInterval(logDate, 1000);

function checkOther(select) {
    const otherInput = document.getElementById("otherFruit");
    if (select.value === "Egyéb") {
        otherInput.style.display = "inline-flex"; // so flex works
        otherInput.focus();
    } else {
        otherInput.style.display = "none";
        otherInput.value = "";
    }
}
 
calculateButton.addEventListener("click", (event) => {
    let diameter = diameterInput.value
    let height = heightInput.value
    let degree = alcoholDegreeInput.value
    let pointFivePercent = 0.5
    let threePercent = 3

    if (height <= 0 || !height || degree <= 0 || !degree || diameter <= 0 || !diameter) {
        errorP.innerText = "Töltsd ki az összes mezőt helyesen!";
        errorP.style.animation = "flashing 1.5s";
        errorP.addEventListener("animationend", function handler() {
            errorP.style.animation = "";
            errorP.removeEventListener("animationend", handler);
        });
        return
    } else {
        errorP.innerText = "";
    }

    let volume = pi * ((diameter / 2) ** 2) * height // mm^3
    volume = volume / 1000000 // dm^3
    let modifiedVolume = (volume * degree) / 25

    pointFivePercent = ((modifiedVolume / 100) * 0.5) * 10
    threePercent = ((modifiedVolume / 100) * 3) * 10

    originalVolumeOutput.innerHTML = volume.toFixed(2) + " L"
    volumeOutput.innerHTML = modifiedVolume.toFixed(2) + " L"
    pointFiveDlOutput.innerHTML = pointFivePercent.toFixed(2) + " dl"
    pointFiveLOutput.innerHTML = (pointFivePercent / 10).toFixed(2) + " L"
    threeDlOutput.innerHTML = threePercent.toFixed(2) + " dl"
    threeLOutput.innerHTML = (threePercent / 10).toFixed(2) + " L"
    eloparlatOutput.innerHTML = threePercent.toFixed(2) + " dl"
})

valSzeszButton.addEventListener("click", (event) => {
    window.open("https://kalkulator.evinfo.hu/kalkulator/palinka/valodi-szeszfok", "_blank");
})

higitasKalkButton.addEventListener("click", (event) => {
    window.open("https://kalkulator.evinfo.hu/kalkulator/palinka/higitas", "_blank");
})



// L * valodi szeszfok, ezt /25-tel; Ennek a számnak kell a 0.5% és 3%