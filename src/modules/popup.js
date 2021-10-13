import { MyHttpRequest } from './httpRequests.js';
import { DomRequest } from './domRequests.js';
import { Templates } from './domTemplates.js';

const commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AOlok8LvMamqLq187WOm/comments';

export const populatePopup = (list, index) => {
  const character = list[index];
  const image = document.querySelector('#chr-img');
  image.src = character.img;
  image.alt = `${character.name} Image`;
  document.querySelector('#chr-name').innerHTML = character.name;
  document.querySelector('#chr-birthday').innerHTML = character.birthday;
  const mainOccupation = character.occupation[0];
  document.querySelector('#chr-occupation').innerHTML = mainOccupation;
  document.querySelector('#chr-nickname').innerHTML = character.nickname;
  document.querySelector('#chr-actor').innerHTML = character.portrayed;
  DomRequest.clear('commentsContainer');

  const commentHttpRequester = new MyHttpRequest(`${commentsURL}?item_id=${character.char_id}`);
  commentHttpRequester.getAsync().then((comments) => {
    comments.forEach((comment) => {
      DomRequest.appendTemplate('commentsContainer', Templates.commentsSection(comment));
    });
  });
};