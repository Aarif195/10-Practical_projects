document.getElementById("calculatorBtn").addEventListener("click", calculator);

function calculator() {
  const loanAmount = parseFloat(
    document.getElementById("loanAmountInput").value
  );
  const interestRate = parseFloat(
    document.getElementById("loanInterestInput").value
  );
  const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please Enter Valid Numbers for all the Fields");
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayment = loanTerm;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -totalPayment));
  const totalInterest = monthlyPayment * totalPayment - loanAmount;

  displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `
    <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong></p>
     <p><strong>Total Interest: ${totalInterest.toFixed(2)}</strong></p>
    `;
}
