import '../css/style.css';
import javascriptLogo from '../images/javascript.svg';
import viteLogo from '../../public/vite.svg';
import setupCounter from './counter';

document.querySelector('#app').innerHTML = `
  <div>
    <a class="font-medium text-[#646cff] hover:text-[#535bf2]" href="#" target="_blank">
      <img src="${viteLogo}" class="h-24 will-change-[filter] transition-[filter] duration-300 p-6 hover:drop-shadow-xl" alt="Vite logo" />
    </a>
    <a class="font-medium text-[#646cff] hover:text-[#535bf2]" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="h-24 will-change-[filter] transition-[filter] duration-300 p-6 hover:drop-shadow-xl" alt="JavaScript logo" />
    </a>
    <h1 class="text-5xl leading-tight">Hello Vite!</h1>
    <div class="p-8">
      <button class="border text-base font-medium hover:border-[#747bff] bg-[#f9f9f9] transition-[border-color] cursor-pointer duration-300 px-5 py-2.5 rounded-lg border-solid border-transparent" id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));
