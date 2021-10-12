import './style.css';
import { myLocalStorage } from "./modules/myLocalstorage";

function component() {
  const element = document.createElement('div');
  const myLS = new myLocalStorage;

  myLS.save();

  

  return element;
}

document.body.appendChild(component());