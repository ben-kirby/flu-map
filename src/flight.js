class Flight {
  static getData(){
    const url = 'http://opensky-network.org/api/states/all'
    return fetch(url);
  }
}
export { Flight };
