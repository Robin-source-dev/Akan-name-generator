const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
]

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
]

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

// Form submission

document.getElementById("AkanForm").addEventListener("submit",generateAkanName)

// Main function

function generateAkanName(event){

    event.preventDefault()

    const day = parseInt(document.getElementById("day").value)
    const month = parseInt(document.getElementById("month").value)
    const year = parseInt(document.getElementById("year").value)

    const gender = document.querySelector('input[name="gender"]:checked')

    // validate input
    if(!validateInput(day, month, year, gender)){
        return
    }
    // Calculate weekday
    const dayIndex = calculateDay(day, month, year)

    // Get Akan name
    const akanName = getAkanName(dayIndex, gender.value)
}