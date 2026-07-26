# Akan Name Generator

## Author

**Robin Mwenda Gikunda**

---

## Project Description

The Akan Name Generator is a simple web application that calculates the day of the week a user was born and assigns them a corresponding Akan name based on their gender.

Akan names originate from the Akan people of Ghana, where children are traditionally named according to the day of the week on which they were born. This application allows users to enter their birth date and gender, then generates the appropriate Akan name.

---

## Features

* Enter birth day, month, and year.
* Select gender (Male or Female).
* Validates user input before processing.
* Calculates the day of the week using the required mathematical formula.
* Displays the user's day of birth.
* Displays the corresponding Akan name.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript

---

## Project Structure

```text
akan-name-generator/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

---
## Usage

1. Open the application in your browser.
2. Enter your:

   * Birth day
   * Birth month
   * Birth year
3. Select your gender.
4. Click the **Generate Akan Name** button.
5. The application will display:

   * The day of the week you were born.
   * Your Akan name.

---

## Akan Names Reference

| Day       | Male    | Female |
| --------- | ------- | ------ |
| Sunday    | Kwasi   | Akosua |
| Monday    | Kwadwo  | Adwoa  |
| Tuesday   | Kwabena | Abenaa |
| Wednesday | Kwaku   | Akua   |
| Thursday  | Yaw     | Yaa    |
| Friday    | Kofi    | Afua   |
| Saturday  | Kwame   | Ama    |

---

## Validation

The application validates user input by ensuring:

* The day is between **1 and 31**.
* The month is between **1 and 12**.
* A valid year is entered.
* A gender is selected before submitting the form.

If any input is invalid, an appropriate error message is displayed.

---

## Future Improvements

* Add leap year validation.
* Validate the exact number of days in each month.
* Improve the user interface with animations.
* Add a dark mode option.
* Display additional information about Akan naming traditions.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

* Moringa School for the project requirements.
* The Akan people of Ghana for inspiring this cultural application.
