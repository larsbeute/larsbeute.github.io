function sumcalc() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const final = num1 + num2;
  document.getElementById("answer").innerHTML = final;
}
