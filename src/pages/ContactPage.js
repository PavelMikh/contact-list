import {$} from "../core/dom";
import {Page} from "../core/Page";

export class ContactPage extends Page {
  getRoot() {
    return $.create('div', 'contact').html(`
      <h1>Contact page is work!</h1>
    `)
  }
}