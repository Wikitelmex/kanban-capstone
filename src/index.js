import './style.css';
import { MyHttpRequest } from './modules/httpRequests.js';
import { DomRequest } from './modules/domRequests.js';
import { Templates } from './modules/domTemplates.js';

const httprequester = new MyHttpRequest('https://www.breakingbadapi.com/api/characters');
let myArray = [];

window.refreshData = () => {
  DomRequest.clear('cardsContainer');
  httprequester.getAsync().then((res) => {
    myArray = res;
    myArray.forEach((element) => {
      DomRequest.appendTemplate('cardsContainer', Templates.CharacterCard(element));
    });
  });
};

window.onload = () => {
  window.refreshData();
};
