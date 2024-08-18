const solicitarNumero = () => {
    const input = document.getElementById('numero-input');
    let numero = parseInt(input.value);
    if (numero < 1 || numero > 20 || isNaN(numero)) {
        alert("Número fuera del rango");
        return null;
    }
    return numero;
};

const mostrarTablasMultiplicar = (numero) => {
    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "<h2>Tablas de Multiplicar:</h2>";

    for (let i = 1; i <= numero; i++) {
        resultadosDiv.innerHTML += `<h3>Tabla de multiplicar del ${i}:</h3>`;
        for (let j = 1; j <= numero; j++) {
            resultadosDiv.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`;
        }
    }
};

const calcularFactorial = (numero) => {
    const factorial = (n) => {
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };

    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML += "<h2>Factoriales:</h2>";

    for (let i = 1; i <= numero; i++) {
        resultadosDiv.innerHTML += `<p>Factorial de ${i} es: ${factorial(i)}</p>`;
    }
};

const limpiarResultados = () => {
    document.getElementById('resultados').innerHTML = "";
    document.getElementById('numero-input').value = "";
    document.getElementById('limpiar-btn').style.display = 'none';
};

const principal = () => {
    const numero = solicitarNumero();
    if (numero !== null) {
        mostrarTablasMultiplicar(numero);
        calcularFactorial(numero);
        document.getElementById('limpiar-btn').style.display = 'block';
    }
};

document.getElementById('calcular-btn').addEventListener('click', principal);
document.getElementById('limpiar-btn').addEventListener('click', limpiarResultados);