import './changeTheme'
import hend from '../handlebars/hendel.hbs'
import '../images/sprite.svg'
import '../css/styles.css'
import menu from '../store/menu.json';
import './lazy.js'

const ulRef = document.querySelector('.js-menu');


function newStringEl(e) { 
const newStringRef = e.map(hend).join('');
ulRef.insertAdjacentHTML('beforeend', newStringRef)
} 

newStringEl(menu)
