const lenght = document.getElementById("lenght")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const unit = document.getElementById("unit")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    let toBeConverted = unit.value
    let meterToFeet = toBeConverted * 3.281
    let feetToMeter = toBeConverted / 3.281
    let literToGallon = toBeConverted * 0.264
    let gallonToLiter = toBeConverted / 0.264
    let kiloToPound = toBeConverted * 2.204
    let poundToKilo = toBeConverted / 2.204
    lenght.textContent = `${toBeConverted} meters = ${meterToFeet.toFixed(3)} feet | 
    ${toBeConverted} feet = ${feetToMeter.toFixed(3)} meters`

    volume.textContent = `${toBeConverted} liters = ${literToGallon.toFixed(3)} gallons | 
    ${toBeConverted} gallons = ${gallonToLiter.toFixed(3)} liters`

    mass.textContent = `${toBeConverted} kilos = ${kiloToPound.toFixed(3)} pounds | 
    ${toBeConverted} pounds = ${poundToKilo.toFixed(3)} kilos`
})

