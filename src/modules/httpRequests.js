import { DomRequest } from './domRequests.js';
import { Templates } from './domTemplates.js';

export class MyHttpRequest {
    #url = '';

    constructor(url = '') {
      this.#url = url;
    }

    async getAsync() {
      try {
        const response = await fetch(this.#url);
        const obj = await response.json();
        return obj;
      } catch (error) {
        DomRequest.appendTemplate('alert', Templates.failAlert(error));
        return false;
      }
    }

    async postAsync(element = {}) {
      try {
        const response = await fetch(this.#url, {
          method: 'POST',
          body: JSON.stringify(element),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const obj = await response.json();
        return obj;
      } catch (error) {
        DomRequest.appendTemplate('alert', Templates.failAlert(error));
        return false;
      }
    }
}
