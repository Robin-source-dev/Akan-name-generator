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

    // Display Result
    displayResult(dayIndex, akanName)
}

// Validate all user input

function validateInput(day, month, year, gender){

    if(isNaN(day) || day < 1 || day > 31){
        alert("Please enter a valid day (1-31).")
        return false
    }
    
    if(isNaN(month) || month < 1 || month > 12){
        alert("Please enter a valid month (1-12).")
        return false
    }

    if(isNaN(year) || year < 1000){
        alert("Please enter a valid year.")
        return false
    }

    if(!gender){
        alert("Please select your gender.")
        return false
    }
    return true
}