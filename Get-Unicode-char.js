function detectChar() {
  const input = document.getElementById("inputType").value;

  if (input) {
    const uniCodeValue = input.charCodeAt(0);
    const result = `The Unidcode Value of "${input}" is ${uniCodeValue}`;
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent = "Please Enter a Charater";
  }
}
