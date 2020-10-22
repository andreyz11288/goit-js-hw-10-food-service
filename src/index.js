import hend from './hendel.hbs'
import './images/sprite.svg'
import './css/styles.css'
import menu from './menu.json';
import './lazy.js'

const ulRef = document.querySelector('.js-menu');
const newStringRef = newStringEl(menu);


ulRef.insertAdjacentHTML('beforeend', newStringRef)


function newStringEl(menu) {
    return menu.map(hend).join('')
} 



// Изменение темы //

const toolBar = document.querySelector('body')
toolBar.className = 'light-theme'
const inputRef = document.querySelector('.theme-switch__toggle')
inputRef.addEventListener('change', () => {
    let toolBarClassName = toolBar.className;
    if (toolBar.className === 'dark-theme') { toolBar.className = 'light-theme'; localStorage.setItem('toolBar.className', 'light-theme'); return } else { toolBar.className = 'dark-theme'; localStorage.setItem('toolBar.className', 'dark-theme') };
    
   
})

const toolBarClassNameTheme = localStorage.getItem('toolBar.className');
toolBar.className = `${toolBarClassNameTheme}`;