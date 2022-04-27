const getSavedCartItems = (item) => {
  const getItem = localStorage.getItem('cartItems');
  item.innerHTML = getItem;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
