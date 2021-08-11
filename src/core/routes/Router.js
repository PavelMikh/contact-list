import {$} from '../dom'
import {ActiveRoute} from './ActiveRoute'

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Selector is not provided in Router')
    }

    this.page = null

    this.$placeholder = $(selector)
    this.routes = routes

    this.changePageHandler = this.changePageHandler.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  changePageHandler() {
    this.page ?? this.$placeholder.clear() // && page.destroy()
    const Page = this.routes[ActiveRoute.path] || this.routes.list
    const page = new Page()
    this.$placeholder.append(page.getRoot())
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }
}