const saveCartItems = (ol) => {
  localStorage.setItem('cartItems', JSON.stringify(ol));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
