const items = document.querySelector('.items');
const itemsCart = document.querySelector('.cart__items');
const btLimparCart = document.querySelector('.empty-cart');
const loadingText = document.createElement('spam');
const contador = document.querySelector('.total-price');
const searchText = document.querySelector('#search');
const searchBtn = document.querySelector('.search_btn');
const searchText2 = document.querySelector('.search_text');

const loading = () => {
  loadingText.className = 'loading';
  loadingText.innerText = 'carregando...';
  items.appendChild(loadingText);
  return loadingText;
};

const loaded = () => {
  loadingText.remove();
  return loadingText;
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}
function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const counterTotal = () => {
  const counter = document.querySelectorAll('.cart__item');
  let sumNumber = 0;
  for (let i = 0; i < counter.length; i += 1) {
    sumNumber += Number(counter[i].id);
  }
  contador.innerHTML = sumNumber
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(itemsCart.innerHTML);
  counterTotal();
}

itemsCart.addEventListener('click', cartItemClickListener);

const createCartItemElement = ({ image, sku, name, salePrice }) => {
  const li = document.createElement('li');
  const div = document.createElement('div');

  li.id = `${salePrice}`;
  li.className = 'cart__item';
  li.appendChild(createProductImageElement(image));
  div.appendChild(createCustomElement('span', 'item__sku', `SKU: ${sku}`));
  div.appendChild(createCustomElement('span', 'name_product', `NOME DO PRODUTO: ${name}`));
  div.appendChild(createCustomElement('span', 'price', `PREÇO: ${salePrice
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`));
  li.appendChild(div);
  li.appendChild(createCustomElement('button', 'btn__x', 'x'));
  return li;
};

const fetchApiCart = async (item) => {
  const produto = await fetchItem(item);
  itemsCart.appendChild(
    createCartItemElement({
      sku: produto.id,
      name: produto.title,
      salePrice: produto.price,
      image: produto.thumbnail,
    }),
  );
  saveCartItems(itemsCart.innerHTML);
  counterTotal();
};

function createProductItemElement({ sku, name, image, price }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', price
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  section.lastChild.addEventListener('click', () =>
    fetchApiCart(section.firstChild.innerText));

  return section;
}

const getItem = () => searchText.value;

const fetchApi = async () => {
  items.innerHTML = '';
  loading();
  const produto = await fetchProducts(getItem());
  const arrayLength = produto.results.length;
  loaded();
  produto.results.forEach((element) => {
    items.appendChild(
      createProductItemElement({
        sku: element.id,
        name: element.title,
        image: element.thumbnail,
        price: element.price,
      }),
    );
  });
  searchText2.innerText = `Você esta vendo ${arrayLength} 
  resultados de: ${getItem().toUpperCase()}`;
  searchText.value = '';
};

searchBtn.addEventListener('click', fetchApi);

btLimparCart.addEventListener('click', () => {
  itemsCart.innerHTML = '';
  localStorage.removeItem('cartItems');
  counterTotal();
});

window.onload = () => { getSavedCartItems(itemsCart); counterTotal(); fetchApi(); };
