const getSavedCartItems = () => {
  const itemsCart = document.querySelector('.cart__items');
  const getItem = localStorage.getItem('cartItems');
  itemsCart.innerHTML = getItem;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
