export default class SwapiService {
  _apiBaseUrl = 'https://swapi.dev/api';
  
  async getResource(url) {
    const res = await fetch(`${this._apiBaseUrl}/${url}/`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, recieved ${res.status}`)
    }

    return await res.json();
  }

  getPerson(id) {
    return this.getResource(`people/${id}`)
  }

  async getAllPeople() {
    const res = await this.getResource('people');
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}`);
  }

  async getAllPlanets() {
    const res = this.getResource(`planets`);
    return res.results;
  }

  getStarship (id) {
    return this.getResource(`starships/${id}`);
  }

  async getAllStarships() {
    return this.getResource(`starships`);
  }
}