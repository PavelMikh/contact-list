import { $ } from '../core/dom'
import {Page} from '../core/Page'

export class ContactListPage extends Page {
  getRoot() {
    return $.create('div', 'list').html(`
      <div>Contact List page is work</div>
    `)
  }
}