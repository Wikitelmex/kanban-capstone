export class DomRequest {
  static appendTemplate(id = '', template = '') {
    const el = document.querySelector(`#${id}`);
    el.innerHTML += template;
  }

  static clear(id = '') {
    const el = document.querySelector(`#${id}`);
    el.innerHTML = '';
  }

  static removeTemplate(idParent = '', idChild = '') {
    const parent = document.querySelector(`#${idParent}`);
    const child = document.querySelector(`#${idChild}`);
    parent.removeChild(child);
  }

  static sustituteTemplate(id = '', newTemplate = '') {
    const el = document.querySelector(`#${id}`);
    el.innerHTML = newTemplate;
  }
}