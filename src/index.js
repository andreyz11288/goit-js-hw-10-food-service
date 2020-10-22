import hend from './hendel.hbs'
import './images/sprite.svg'
import './css/styles.css'
import menu from './menu.json';


const ulRef = document.querySelector('.js-menu');
const newStringRef = newStringEl(menu);


ulRef.insertAdjacentHTML('beforeend', newStringRef)


function newStringEl(menu) {
    return menu.map(hend).join('')
} 



