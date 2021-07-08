function sumcalc() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const final = num1 + num2;
  document.getElementById("answer").innerHTML = final;
}

function addFields() {
  var numparents = document.getElementById("numouders").value;
  var numkind = document.getElementById("numkind").value;
  var container = document.getElementById("step2ouder");
  var container1 = document.getElementById('step2kind');
  for (i=0;i<numparents;i++) {
    container.appendChild(document.createTextNode("Naam ouder " + (i+1) + " "));
    var input = document.createElement("input");
    input.type = "text";
    input.id = "test" + (i + 1);
    input.className = "form-control";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
  for (i=0;i<numkind;i++) {
    container1.appendChild(document.createTextNode("Naam kind " + (i+1) + " "));
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.className = "form-control";
    container1.appendChild(input1);
    container1.appendChild(document.createElement("br"));
  }
  var btndoor = document.getElementById("btndoor");
  var but = document.createElement("input");
  but.type = "submit";
  but.className = "btn btn-primary";
  but.value = "Bevestig namen"
  btndoor.append(but);
}
