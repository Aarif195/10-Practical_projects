const redSlider = document.getElementById("redSlider");
const blueSlider = document.getElementById("blueSlider");
const greenSlider = document.getElementById("greenSlider");

const redValueSpan = document.getElementById("redValue");
const blueValueSpan = document.getElementById("blueValue");
const greenValueSpan = document.getElementById("greenValue");

const colorBox = document.getElementById("color-box");

const copyButton = document.getElementById("copyButton");
const inputTypeRGBValue = document.getElementById("inputType");

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
copyButton.addEventListener("click", copyRGBValue);

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  console.log(rgbColor);

  colorBox.style.backgroundColor = rgbColor;

  // redValueSpan.textContent = redValue;
  // blueValueSpan.textContent = blueValue;
  // greenValueSpan.textContent = greenValue;
}

updateColor();

function copyRGBValue() {}
