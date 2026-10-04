# 🌡️ Temperature Converter Website

A simple and responsive **Temperature Converter Website** built using **HTML5, CSS3, and Vanilla JavaScript**.

The application allows users to convert temperatures between:

* Celsius (°C)
* Fahrenheit (°F)
* Kelvin (K)

All three converted values are displayed simultaneously.

---

## 🎯 Objective

The objective of this project is to build an interactive temperature conversion tool with:

* User input
* Unit selection
* Temperature conversion
* Input validation
* Absolute zero validation
* Responsive design

---

## ✨ Features

* ✅ Celsius to Fahrenheit conversion
* ✅ Celsius to Kelvin conversion
* ✅ Fahrenheit to Celsius conversion
* ✅ Fahrenheit to Kelvin conversion
* ✅ Kelvin to Celsius conversion
* ✅ Kelvin to Fahrenheit conversion
* ✅ Numeric input validation
* ✅ Empty input validation
* ✅ Absolute zero validation
* ✅ Error messages
* ✅ Conversion results displayed simultaneously
* ✅ Clean and centered user interface
* ✅ Responsive design
* ✅ Mobile-friendly layout
* ✅ Vanilla JavaScript
* ✅ Google Fonts

---

## 🛠️ Technologies Used

| Technology   | Purpose                               |
| ------------ | ------------------------------------- |
| HTML5        | Structure of the website              |
| CSS3         | Styling and responsive design         |
| JavaScript   | Temperature conversion and validation |
| Google Fonts | Typography                            |

---

## 📁 Project Structure

```text
temperature-converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧮 Conversion Formulas

### Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Fahrenheit to Celsius

```text
°C = (°F − 32) × 5/9
```

### Celsius to Kelvin

```text
K = °C + 273.15
```

### Kelvin to Celsius

```text
°C = K − 273.15
```

### Fahrenheit to Kelvin

```text
K = (°F − 32) × 5/9 + 273.15
```

### Kelvin to Fahrenheit

```text
°F = (K − 273.15) × 9/5 + 32
```

---

## 🚫 Absolute Zero Validation

The application prevents temperatures below absolute zero.

Absolute zero is:

```text
−273.15°C
```

If the user enters a value below absolute zero, the application displays a friendly error message instead of showing an invalid result.

For example:

```text
Input: -300 °C

Error:
Temperature cannot be below absolute zero (−273.15°C).
```

---

## ⚠️ Input Validation

The application checks whether:

1. The input field is empty.
2. The entered value is numeric.
3. The temperature is not below absolute zero.

Example:

```text
Input:
abc

Error:
Please enter a valid numeric temperature.
```

---

## ▶️ How to Run

### Step 1: Open the project

Open the project folder in VS Code.

### Step 2: Open `index.html`

You can simply double-click:

```text
index.html
```

or use the **Live Server** extension in VS Code.

### Step 3: Enter a temperature

For example:

```text
25
```

### Step 4: Select the input unit

Choose:

```text
Celsius
```

### Step 5: Click Convert

The application will display:

```text
Celsius:     25 °C
Fahrenheit:  77 °F
Kelvin:      298.15 K
```

---

## 📱 Responsive Design

The website is designed to work on:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📲 Tablet

CSS media queries automatically adjust the layout for smaller screens.

---

## 🎨 User Interface

The website includes:

* Centered converter card
* Clear labels
* Input field
* Unit dropdown
* Convert button
* Result cards
* Error messages
* Responsive layout

---

## 🔮 Future Improvements

Possible improvements include:

* Dark mode
* Real-time conversion while typing
* Conversion history
* Copy result button
* Temperature conversion animations
* More measurement units
* Reset button
* Keyboard support
* Local storage for conversion history

---

## 👨‍💻 Author

**Your Name**

Student & Aspiring Software Developer

---

## 📄 License

This project is created for educational and learning purposes.

You are free to modify and customize the project for your own use.

---

## ⭐ Task Checklist

* [x] Numeric temperature input
* [x] Numeric input validation
* [x] Celsius selector
* [x] Fahrenheit selector
* [x] Kelvin selector
* [x] Convert button
* [x] Celsius result
* [x] Fahrenheit result
* [x] Kelvin result
* [x] Absolute zero validation
* [x] User-friendly error messages
* [x] Clean centered UI
* [x] Responsive design
* [x] HTML5
* [x] CSS3
* [x] Vanilla JavaScript
