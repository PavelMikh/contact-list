export class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector
  }

  get inner() {
    return this.$el.innerHTML
  }

  get data() {
    return this.$el.dataset
  }

  text(text) {
    if (typeof text === 'string') {
      if (this.$el.tagName.toLowerCase() === 'input') {
        this.$el.value = text

        return this
      }
      this.$el.textContent = text

      return this
    }

    if (this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value
    }

    return this.$el.textContent
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }

  addClass(className = '') {
    this.$el.classList.add(className)

    return this
  }

  removeClass(className = '') {
    this.$el.classList.remove(className)

    return this
  }

  toggleClass(className = '') {
    this.$el.classList.toggle(className)
  }

  attr(name, value) {
    if (value) {
      this.$el.setAttribute(name, value)
      return this
    }
    return this.$el.getAttribute(name)
  }

  css(styles = {}) {
    Object
        .keys(styles)
        .forEach(key => {
          this.$el.style[key] = styles[key]
        })

    return this
  }

  find(selector) {
    return this.$el.querySelector(selector)
  }

  remove(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    node.parentNode.removeChild(node)
    return node
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}


