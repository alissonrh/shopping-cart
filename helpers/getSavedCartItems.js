function getSavedCartItems(item) {
  /* const itemsCart = document.querySelector('.cart__items'); */
  // eslint-disable-next-line no-param-reassign
  item.innerHTML = localStorage.getItem('cartItems');
}

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
