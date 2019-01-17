class Flight {
  static getData(days){
    const url = 'http://opensky-network.org/api/states/all'
    return fetch(url);
  }
}
export { Flight };
