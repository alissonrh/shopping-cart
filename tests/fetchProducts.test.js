require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  /* fail('Teste vazio'); */
  it('testa se se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('testa se a função fetchProducts com o argumento "computador" o fetch foi chamada;', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  })
  it('testa se ao chamar ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";', async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url)
  })
  it('testa se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  it('testa se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    expect(await fetchProducts()).toEqual(new Error ('You must provide an url'))
  })
});
