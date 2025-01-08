function isPlaindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(cleanStr);

  const reversedStr = cleanStr.split("").reverse().join("");
  console.log(reversedStr);

  return cleanStr === reversedStr;
}

function plaindromeCheker() {
  const inputText = document.getElementById("inputText");
  const result = document.getElementById("result");

  if (isPlaindrome(inputText.value)) {
    result.textContent = `"${inputText.value}" is a Plalindrome`;
  } else {
    result.textContent = `"${inputText.value}" is a Plalindrome`;
  }

  result.classList.add("fadein");
  inputText.value = '';
}

document
  .getElementById("chekerButton")
  .addEventListener("click", plaindromeCheker);
