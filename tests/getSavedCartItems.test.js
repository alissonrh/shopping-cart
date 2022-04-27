const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('testa se ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    getSavedCartItems('itemsCart');
    expect(localStorage.getItem).toHaveBeenCalled()
  })
  it('testa se ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems('itemsCart');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  })
});
