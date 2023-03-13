import { gsap } from "gsap";
import { lerp, getMousePos, getSiblings } from "./utils";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase)
let mouse = { x: 0, y: 0 };
window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));
export default class Cursor {
  constructor(el) {
    this.Cursor = el;
    this.Cursor.style.opacity = 0;
    this.Item = document.querySelectorAll(".hero-inner");
    this.bounds = this.Cursor.getBoundingClientRect();
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.2 },
      y: { previous: 0, current: 0, amt: 0.2 },
    };
    this.onMouseMoveEv = () => {
      this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x;
      this.cursorConfigs.y.previous = this.cursorConfigs.y.previous = mouse.y;
      gsap.to(this.Cursor, {
        duration: 1,
        ease: "Power3.easeOut",
        opacity: 1,
      });
      this.onScaleMouse();
      this.onTurn();
      this.onTurn180();
      requestAnimationFrame(() => this.render());
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    window.addEventListener("mousemove", this.onMouseMoveEv);
  }
  onScaleMouse() {
    this.Item.forEach((link) => {
      if (link.matches(":hover")) {
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      }
      link.addEventListener("mouseenter", () => {
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      });
      link.addEventListener("mouseleave", () => {
        this.ScaleCursor(this.Cursor.children[0], 0);
      });
    });
  }
  onTurn() {
    this.Item.forEach((link) => {
      if (link.matches(":hover")) {
        this.Turn(this.Cursor.children[0], 90);
      }
      link.addEventListener("mouseenter", () => {
        this.Turn(this.Cursor.children[0], 90);
      });
      link.addEventListener("mouseleave", () => {
        this.Turn(this.Cursor.children[0], 0);
      });
    });
  }

  onTurn180() {
    this.Item.forEach((link) => {
      if (link.matches(":hover")) {
        this.Turn180(this.Cursor.children[0], 90);
      }
      link.addEventListener("click", () => {
        this.Turn180(this.Cursor.children[0], 90);
      });
    });
  }

  Turn180(el, amount) {
    gsap.to(el, {
      duration: 0.5,
      rotation: amount,
      ease: "turn",
    });
  }

  Turn(el, amount) {
    gsap.to(el, {
      duration: 0.5,
      rotation: -amount,
      ease: "Power2.easeOut",
    });
  }
  
  ScaleCursor(el, amount) {
    gsap.to(el, {
      duration: 0.4,
      scale: amount,
      ease: "Power3.easeOut",
    });
  }
  render() {
    this.cursorConfigs.x.current = mouse.x;
    this.cursorConfigs.y.current = mouse.y;
    for (const key in this.cursorConfigs) {
      this.cursorConfigs[key].previous = lerp(
        this.cursorConfigs[key].previous,
        this.cursorConfigs[key].current,
        this.cursorConfigs[key].amt
      );
    }
    this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`;
    requestAnimationFrame(() => this.render());
  }
}
CustomEase.create("turn", "M0,0 C0,0 0.04558,0.23117 0.08199,0.37794 0.10829,0.48396 0.12444,0.54527 0.16029,0.6461 0.18757,0.72283 0.20762,0.77159 0.24642,0.84045 0.27617,0.89323 0.30417,0.92564 0.34356,0.97128 0.36143,0.99198 0.37737,1.00291 0.40024,1.01868 0.42257,1.03408 0.43842,1.04303 0.46324,1.0538 0.48854,1.06479 0.50619,1.07047 0.53323,1.07644 0.56201,1.08278 0.58189,1.08736 0.6109,1.08638 0.67772,1.08411 0.72458,1.08233 0.79034,1.06773 0.87065,1.0499 1,1 1,1 ");