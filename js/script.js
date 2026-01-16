function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

/* CALCULADORA SIMPLE */
function calculateSimple() {
    const input = document.getElementById("simpleInput").value;
    const result = document.getElementById("simpleResult");

    try {
        result.textContent = eval(input);
    } catch {
        result.textContent = "Expresión no válida";
    }
}

/* INTEGRAL */
function toggleLimits() {
    const type = document.getElementById("integralType").value;
    document.getElementById("limits").style.display = type === "definite" ? "block" : "none";
}

function calculateIntegral() {
    const func = document.getElementById("function").value;
    const type = document.getElementById("integralType").value;
    const result = document.getElementById("integralResult");

    try {
        if (type === "indefinite") {
            result.textContent = nerdamer(`integrate(${func}, x)`).toString() + " + C";
        } else {
            var a = parseFloat(document.getElementById("a").value);
            var b = parseFloat(document.getElementById("b").value);

            if (a === "" || b === "") throw "Faltan límites";

            result.textContent = nerdamer(`defint(${func}, x, ${a}, ${b})`).toString();
        }
    } catch {
        result.textContent = "Error en la función o los datos";
    }
}
