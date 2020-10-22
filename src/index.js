import hend from './hendel.hbs'
import './images/sprite.svg'
import './css/styles.css'
import menu from './menu.json';
import './js/lazy.js'

const ulRef = document.querySelector('.js-menu');
const newStringRef = newStringEl(menu);


ulRef.insertAdjacentHTML('beforeend', newStringRef)


function newStringEl(menu) {
    return menu.map(hend).join('')
} 



// Изменение темы //

import './js/changeTheme'

