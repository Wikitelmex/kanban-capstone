import './style.css';
import { MyHttpRequest } from './modules/httpRequests.js';
import { DomRequest } from './modules/domRequests.js';
import { Templates } from './modules/domTemplates.js';
import { populatePopup } from './modules/popup.js';
import { elementsCounter } from './modules/tools.js';

const httprequester = new MyHttpRequest('https://www.breakingbadapi.com/api/characters');
const likesHttpRequester = new MyHttpRequest('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AOlok8LvMamqLq187WOm/likes/');

let myArray = [];

const setEventListeners = (myArray) => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
      populatePopup(myArray, index);
    });
  });
};

window.refreshData = () => {
  DomRequest.clear('cardsContainer');
  httprequester.getAsync().then((res) => {
    myArray = res;
    myArray.forEach((element) => {
      DomRequest.appendTemplate('cardsContainer', Templates.CharacterCard(element));
    });
    setEventListeners(myArray);

    const counter = document.querySelector('#charactersCounter');
    counter.innerHTML = elementsCounter(myArray);

    likesHttpRequester.getAsync().then((res) => {
      res.forEach((element) => {
        DomRequest.sustituteTemplate(element.item_id, Templates.likesAmount(element.likes));
      });
    });
  });
};

window.addLike = (id = '') => {
  const obj = { item_id: `item${id}` };
  likesHttpRequester.postAsync(obj).then(() => {
    const likeBtn = document.querySelector(`#likeButton${id}`);
    likeBtn.classList.replace('bi-heart', 'bi-heart-fill');
    likeBtn.classList.add('text-danger');
    likeBtn.setAttribute('onclick', '');
    const likesSpan = document.querySelector(`#item${id}`);
    likesSpan.innerHTML = `${Number.parseInt(likesSpan.innerHTML, 10) + 1}`;
  });
};

window.onload = () => {
  window.refreshData();
};
