var code =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
var pressed = [];
window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-code.length - 1, pressed.length - code.length);
  if (pressed.join("").includes(code)) {
    window.location.replace(window.location.pathname + "ducky");
  }
});
