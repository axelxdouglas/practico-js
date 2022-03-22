//Calculando figuras geométricas

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = (lado) => lado * 4;
  // console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} + cm`);

  const areaCuadrado = (lado) => lado * lado;
  // console.log(`El área del cuadrado es: ${areaCuadrado} cmˆ2`);
  console.groupEnd();


  // Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   `Los lados del triángulo miden: 
//    ${ladoTriangulo1}
//    cm, 
//    ${ladoTriangulo2}
//    cm, 
//    ${baseTriangulo}
//    cm`
// );

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es de:  ${alturaTriangulo} cm`);

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (base, altura) => (base * altura) / 2;
//console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = (radio) => radio * 2;

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

// Área
const areaCirculo = (radio) => PI * radio ** 2;

console.groupEnd();


// Aquí interactuamos con el HTML

//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    const perimetro = perimetroCirculo(value);

    alert(`El perimetro es: ${perimetro}  cm`);
}

function calcularAreaCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    const area = areaCirculo(value);

    alert(`El área es: ${area} cm^2 `);
}


// Triángulos
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById('inputTriangulo1');
    const inputLado2 = document.getElementById('inputTriangulo2');
    const inputBase = document.getElementById('inputTriangulo3');
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

    alert(`El perimetro es: ${perimetro} cm`);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById('inputTriangulo3');
    const inputAltura = document.getElementById('inputTriangulo4');
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);

    alert(`El área es: ${area} cm^2`);
}

//Triangulo Isósceles
function trianguloIso(){
  let lado1 = document.getElementById("isoLado1");
  let iLado1 = parseFloat(lado1.value);

  let lado2 = document.getElementById("isoLado2");
  let iLado2 = parseFloat(lado2.value);

  let base = document.getElementById("isoBase");
  let iBase = parseFloat(base.value);

  if(iLado1 != iLado2){
      alert("No se puede calcular debido a que los lados son diferentes");
  }else{
      const pequenoLado2 = iBase /2; 
      const pequenoBase = iLado1;

      const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
      const pequenoBaseCuadrado = pequenoBase * pequenoBase;
       
      let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

      const grandeAltura = pequenoLado1;
      alert(`La altura del triangulo es: ${grandeAltura}cm`);
  }
}