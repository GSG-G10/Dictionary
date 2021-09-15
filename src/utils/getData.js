const getData = searchValue => {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      .then(res=>res.json())
      .catch(err => {
        throw new Error(`fetch getData failed ${err}`);
      });
  };
  export default getData