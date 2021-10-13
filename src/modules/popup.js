import { MyHttpRequest } from './httpRequests.js';
import { DomRequest } from './domRequests.js';
import { Templates } from './domTemplates.js';
import { elementsCounter } from './tools.js';

const commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AOlok8LvMamqLq187WOm/comments';

const populateComments = (id) => {
  DomRequest.clear('commentsContainer');
  const commentHttpRequester = new MyHttpRequest(`${commentsURL}?item_id=${id}`);
  commentHttpRequester.getAsync().then((comments) => {
    comments.forEach((comment) => {
      DomRequest.appendTemplate('commentsContainer', Templates.commentsSection(comment));
    });
    const counter = document.querySelector('#comments-counter');
    counter.textContent = elementsCounter(comments);
  });
};

const addComment = (id) => {
  const username = document.querySelector('#comment-name');
  const content = document.querySelector('#comment-content');
  if (username.value !== '' && content.value !== '') {
    const comment = {
      item_id: id,
      username: username.value,
      comment: content.value,
    };
    const commentHttpRequester = new MyHttpRequest(commentsURL);
    commentHttpRequester.postAsync(comment).then(() => {
      populateComments(id);
      username.value = '';
      content.value = '';
    });
  }
};

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

  populateComments(character.char_id);

  DomRequest.clear('comment-btn');
  DomRequest.appendTemplate('comment-btn', Templates.commentButton());
  const button = document.querySelector('#comment-submit');
  button.addEventListener('click', () => { addComment(character.char_id); });
};