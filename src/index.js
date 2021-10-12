import './style.css';
import { MyHttpRequest } from './modules/httpRequests.js';
import { DomRequest } from './modules/domRequests.js';
import { Templates } from './modules/domTemplates.js';
import { populatePopup } from './modules/popup.js';

const httprequester = new MyHttpRequest('https://www.breakingbadapi.com/api/characters');
const likesHttpRequester = new MyHttpRequest('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AOlok8LvMamqLq187WOm/likes/');

let myArray = [];

window.refreshData = () => {
  DomRequest.clear('cardsContainer');
  httprequester.getAsync().then((res) => {
    myArray = res;
    myArray.forEach((element) => {
      DomRequest.appendTemplate('cardsContainer', Templates.CharacterCard(element));
    });

    likesHttpRequester.getAsync().then((res) => {
      res.forEach((element) => {
        DomRequest.sustituteTemplate(element.item_id, Templates.likesAmount(element.likes));
      });
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