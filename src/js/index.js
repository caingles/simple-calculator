const equal = document.querySelector("#equal");
const showResult = document.querySelector("#showResult");
const addCharacters = document.querySelectorAll(".add");

let operation = "";
let continueOperation = true;

addCharacters.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      operation[operation.length - 1] === "+" ||
      operation[operation.length - 1] === "-" ||
      operation[operation.length - 1] === "*" ||
      operation[operation.length - 1] === "/"
    ) {
      continueOperation = false;
    } else {
      continueOperation = true;
    }

    if (
      continueOperation === false &&
      (element.textContent == "+" ||
        element.textContent == "-" ||
        element.textContent == "*" ||
        element.textContent == "/")
    ) {
      operation = operation.substring(0, operation.length - 1);
    } else {
      operation += element.textContent;
      showResult.textContent = operation;
    }
  });
});

equal.addEventListener("click", () => {
  showResult.textContent = eval(operation);
  operation = "";
});
