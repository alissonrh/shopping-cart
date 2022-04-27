const fetchItem = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const promiseFetch = await fetch(url);
    const data = await promiseFetch.json();
   return data;
  } catch (err) {
    return err;
  }
};

fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
