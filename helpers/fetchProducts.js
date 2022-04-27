const fetchProducts = async (item) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
    const promiseFetch = await fetch(url);
    const data = await promiseFetch.json();
    return data;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
