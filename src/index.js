import { displayContent as displayHomeContent } from "./home.js";
import { displayContent as displayMenuContent } from "./menu.js";
import { displayContent as displayAboutContent } from "./about.js";

const contentElement = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => {

  contentElement.innerHTML = ""

  displayHomeContent(contentElement);
})

menuBtn.addEventListener("click", () => {

  contentElement.innerHTML = ""

  displayMenuContent(contentElement);
})

aboutBtn.addEventListener("click", () => {

  contentElement.innerHTML = ""

  displayAboutContent(contentElement);
})

displayHomeContent(contentElement);
