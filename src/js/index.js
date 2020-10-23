import changeTheme from './changeTheme'
import '../images/sprite.svg'
import '../css/styles.css'
import './lazy.js'
import menu from '../store/menu.json';
import newStringEl from './addMarkup.js'




newStringEl(menu)
changeTheme()