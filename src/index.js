import _ from 'lodash';
import './style.css';
import { myLocalStorage } from "./modules/myLocalstorage";

function component() {
  const element = document.createElement('div');
  const myLS = new myLocalStorage;

  myLS.save();

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());