const calculoIMC = (peso, altura) => {
  let imc = peso / (altura * altura);
  return imc;
};
calculoIMC();

const resultadoIMC = (imc) => {
  if (imc >= 18.5 && imc <= 24.9) {
    return "Normal";
  } else if (imc >= 25.0 && imc <= 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30.0 && imc <= 40.0) {
    return "Obesidade";
  } else if (imc > 40.0) {
    return "Obesidade grave";
  } else {
    return "Abaixo do peso ideal";
  }
};


const mostrarResultadoIMC = () => {
  let peso = Number(document.getElementById("peso").value);
  let altura = Number(document.getElementById("altura").value);

  let imc = calculoIMC(peso, altura);
  document.getElementById("resultado").innerText = "O seu IMC é: " + imc;

  let faixaIMC = resultadoIMC(imc);
  alert("Sua faixa de IMC é: " + faixaIMC);
};
