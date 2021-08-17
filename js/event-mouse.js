// собития миши
//   - mouseenter и mouseleave(ето ховер)
//   - mouseover и mouseout
//   - mousemove(chatty event - болтливое собитие)
// Доп мат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
// - хорошая задачка: http://learn.javascript.ru/task/move-ball-field

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseenter", onMouseEnter);
boxRef.addEventListener("mouseleave", onMouseLeave);
boxRef.addEventListener("mousemove", onMouseMuve);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add("box--active");
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove("box--active");
}

function onMouseMuve(event) {
  console.log(event);
}
