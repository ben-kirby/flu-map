class Flu {
  constructor() {
    this.fluData = [];
  }

  getData(days){
    return fetch(`http://api.flutrack.org/?time=${days}`).then(function(response){
      return JSON.stringify(response.json());
    })
  }

}
