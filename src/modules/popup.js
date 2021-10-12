export const populatePopup = (charList, index) => {
  const character = charList[index];
  document.querySelector('#chr-name').innerHTML = character.name;
  document.querySelector('#chr-birthday').innerHTML = character.birthday;
  document.querySelector('#chr-occupation').innerHTML = character.occupation[0];
  document.querySelector('#chr-nickname').innerHTML = character.nickname;
  document.querySelector('#chr-actor').innerHTML = character.portrayed;
}