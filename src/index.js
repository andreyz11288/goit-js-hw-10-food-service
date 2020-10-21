import './images/sprite.svg'
import './css/styles.css'
import menu from './menu.json';
const ulRef = document.querySelector('.js-menu');

console.log(menu)

const newStringEl = menu.reduce((acc, { id, description, name, price, image, ingredients }) => {
  return (acc += `<li class="menu__item">
  <article class="card">
    <img
      src="${image}"
      alt="${name}"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        ${price} кредитов
      </p>

      <p class="card__descr">
        ${description}
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">${ingredients[0]}</li>
        <li class="tag-list__item">${ingredients[1]}</li>
        <li class="tag-list__item">${ingredients[2]}</li>
        <li class="tag-list__item">${ingredients[3]}</li>
        <li class="tag-list__item">${ingredients[4]}</li>
        <li class="tag-list__item">${ingredients[5]}</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>`);
}, '');
ulRef.innerHTML = newStringEl;



/* <li class="menu__item">
  <article class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt="Картофель, запеченный в мундире"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картофель, запеченный в мундире</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        100 кредитов
      </p>

      <p class="card__descr">
        Ароматный, сытный, шипящий домашний картофель, фаршированный
        сметанно-беконной начинкой, — это очень простой и очень эффектный способ
        накормить большое количество человек, практически не потратив на готовку
        ни сил, ни времени. Обычную картошку при желании тут можно заменить на
        сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий
        красный перец.
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картофель</li>
        <li class="tag-list__item">Чеснок</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердый сыр</li>
        <li class="tag-list__item">Зеленый лук</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li> */