import './style.css';
import printMe from './home';

 function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = 'Alparslan Kilinc';
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.classList.add('hello');
  return element;
 }

 document.body.appendChild(component());