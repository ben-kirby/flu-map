class Flu {
  static getData(days){
    const url = `http://api.flutrack.org/?time=${days}`;
    const options = { mode: 'cors' };
    return fetch(url, options);
  }






}
export { Flu }
