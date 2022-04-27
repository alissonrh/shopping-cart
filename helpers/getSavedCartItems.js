function getSavedCartItems(item) {
  const theElement = item;
  theElement.innerHTML = localStorage.getItem('cartItems');
}

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
