let buttons = document.querySelectorAll(".buttons");
let body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const colors = ["grey", "brown", "crimson", "purple"];
    const buttonId = e.target.id;

    if (colors.includes(buttonId)) {
      body.style.backgroundColor = buttonId;
      buttons.forEach((btn) => {
        btn.innerHTML = "Please Click Me!";
      });
      button.innerHTML = "Clicked, Color Changed";
      e.stopPropagation();
    }
  });
});

document.addEventListener("click", () => {
  body.style.backgroundColor = "#151559";
  buttons.forEach((btn) => {
    btn.innerHTML = "Please Click Me!";
  });
});

