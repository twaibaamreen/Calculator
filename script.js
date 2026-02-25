let display = document.getElementById("display");
let calculator = document.getElementById("calculator");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Toggle light/dark mode for calculator only
function toggleTheme() {
  calculator.classList.toggle("dark-mode");
  calculator.classList.toggle("light-mode");
}
