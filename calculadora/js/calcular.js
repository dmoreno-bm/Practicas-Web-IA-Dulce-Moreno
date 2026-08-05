let operacion = prompt("Seleccione Operación: [+] Suma [-] Resta [*] Multiplicación [/] División");
if ( (operacion != "+") && (operacion != "-") && (operacion != "*") && (operacion != "/") ) {
  alert("¡Opderacion no valida");
} else {
  let numero1 = prompt("Ingrese Numero 1:");
  let numero2 = prompt("Ingrese Numero 2:");
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("¡Los datos deben ser numericos");
  } else {
      if (operacion == "/" && numero2 == "0"){
        alert("¡numero 2 no debe ser cero");
      } else {
        let resultado = 0;
        let num1 = new Number(numero1);
        let num2 = new Number(numero2);
        switch (operacion) {
          case "+":
            resultado = num1 + num2;
            break;
          case "-":
            resultado = num1 - num2;
            break;
          case "*":
            resultado = num1 * num2;
            break;
          case "/":
            resultado = num1 / num2;
            break;        
          default:
            break;
        }
        alert("Resultado " + numero1 + " " + operacion + " " + numero2 + "= "+ resultado);
      }
  }
}
