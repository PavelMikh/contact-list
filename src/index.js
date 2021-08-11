import './styles/index.scss'
import {Router} from './core/routes/Router'
import {ContactListPage} from './pages/ContactListPage'
import {ContactPage} from './pages/ContactPage'

new Router('#app', {
  list: ContactListPage,
  contact: ContactPage
})