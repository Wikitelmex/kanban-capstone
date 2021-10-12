import './style.css';
import { MyHttpRequest } from './modules/httpRequests.js';
import { DomRequest } from './modules/domRequests.js';
import { Templates } from './modules/domTemplates.js';
import { populatePopup } from './modules/popup.js';

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

const commentBtns = document.querySelectorAll('.comment-btn');
commentBtns.forEach((item, index) => {
  item.addEventListener('click', () => { 
    populatePopup(myArray, index); 
    console.log('1234');
  });
});