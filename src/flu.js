class Flu {
  static getData(days){
    const url = `http://api.flutrack.org/?s=sick&time=${days}`;
    return fetch(url);
  }
}
export { Flu }
