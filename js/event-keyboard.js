// Типи собитий: keypress, (keydown, keyup)
// Ограничение keypress
// Свойства KeyboardEvent.key и KeyboardEvent.cod

const refs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};
// keydown, keyup - срабативают на всех клавишах
// keypress - срабативает только на клавишах которие генерят
// символи
window.addEventListener("keypress", onKeypress);
refs.clearBtn.addEventListener("click", onClearOutput);

function onKeypress(event) {
  // KeyboardEvent.key; - символ на вводимом язике
  console.log("event key:", event.key);
  // KeyboardEvent.cod; - код физической клавиши
  console.log("event code:", event.code);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = "";
}
