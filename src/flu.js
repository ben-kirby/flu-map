class Flu {
  static getData(days){
    // const url = `http://api.flutrack.org/?s=sick&time=${days}`;
    const url = 'http://opensky-network.org/api/states/all'
    // const options = { mode: 'cors' };
    return fetch(url);
  }
}
export { Flu }
