import menu from '../store/menu.json';
const ulRef = document.querySelector('.js-menu');


export default function newStringEl(e) { 
const newStringRef = e.map(hend).join('');
ulRef.insertAdjacentHTML('beforeend', newStringRef)
} 
// newStringEl(menu)