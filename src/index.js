import renderHomePageContent from "./home/home";
import renderAboutPageContent from "./about/about";
import renderMenuContentPage from "./menu/menu";
import './style.css';

const divContent = document.querySelector('#content');
const nav = document.querySelector('nav');
nav.classList.add('navbar');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.classList.add('button'));

renderHomePageContent(divContent);

nav.addEventListener('click', e => {
  if (e.target.textContent === 'Home') {
    divContent.replaceChildren();
    renderHomePageContent(divContent);
  } else if (e.target.textContent === 'About') {
    divContent.replaceChildren();
    renderAboutPageContent(divContent)
  } else if (e.target.textContent === 'Menu') {
    divContent.replaceChildren();
    renderMenuContentPage(divContent)
  }
})