import ComponentFactory from "./ComponentFactory.js";
import Icons from "./utils/Icons.js";

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add("has-js");

    Icons.load();
    new ComponentFactory();

    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    const eye = cursorDot.querySelector(".eye");

    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "backwards" }
      );
    });

    window.addEventListener("mousedown", () => {
      if (eye) {
        eye.classList.add("blink");
      }
    });

    window.addEventListener("mouseup", () => {
      if (eye) {
        eye.classList.remove("blink");
      }
    });
  }
}
w;
new Main();
