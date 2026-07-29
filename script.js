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

document.getElementById("akanForm").addEventListener("submit",generateAkanName)

// Main function

function generateAkanName(event){

    event.preventDefault()

    // reading user input
    const day = parseInt(document.getElementById("day").value)
    const month = parseInt(document.getElementById("month").value)
    const year = parseInt(document.getElementById("year").value)

    // Selecting gender
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

// Calculate day of week using formula

function calculateDay(day, month, year){
    let MM = month
    let YY = year % 100
    let CC = Math.floor(year / 100)

    // January and February Adjustment

    if(MM === 1){
        MM = 13
        YY--

        if(YY < 0){
            YY = 99
            CC--
        }
    }
    if(MM === 2){
        MM = 14
        YY--

        if(YY < 0){
            YY = 99
            CC--
        }
    }

    let value = Math.floor((
        (CC / 4)
        -(2 * CC)
        -1
        +((5 * YY) / 4)
        +((26 * (MM + 1 )) / 10)
        + day
    ) %7
)
value = ((value % 7) + 7) %7

/*
Formula returns
0 = Saturday
1 = Sunday
2 = Monday
3 = Tuesday
4 = Wednesday
5 = Thursday
6 = Friday

convert to:
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday

*/

// Convert result of formula into the correct day of the week 

const map = [6,0,1,2,3,4,5]
// returns corrected weekday index
return map[value]
}

//Get Akan name

function getAkanName(dayIndex, gender){
    if(gender === "male"){
        return maleNames[dayIndex]
    }
    else{
        return femaleNames[dayIndex]
    }
}

// Display output

function displayResult(dayIndex, akanName){
    document.getElementById("result").innerHTML = `
    <h2>Your Result<h2>
    <p>You were born on <strong>${days[dayIndex]}</strong>.</p>
    <p>Your Akan name is <strong>${akanName}</strong>.</p>`

}