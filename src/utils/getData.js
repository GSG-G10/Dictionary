const getData = (query) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
};
export default getData;
