export default class Utils {
  constructor() {}

  checkEmail(email) {
    const regexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regexp.test(email);
  }

  checkName(name) {
    let regexp = /^[a-zA-Z\s]*$/;
    return regexp.test(name);
  }

  checkRadioBtns(arr) {
    let result;
    arr.forEach((element) => {
      if (element.checked) {
        result = element.value;
      }
    });
    return result;
  }

  // constructor() {
  //   this._urlBase = "https://swapi.dev/api";
  // }
  // extractId(url) {
  //   const idRegExp = /\/([0-9]*)\/$/;
  //   const id = url.match(idRegExp)[1];
  //   return id;
  // }
  // transformPlanet(planet) {
  //   return {
  //     id: this.extractId(planet.url),
  //     name: planet.name,
  //     population: planet.population,
  //     rotationPeriod: planet.rotation_period,
  //     diameter: planet.diameter,
  //   };
  // }
  // getPeople() {
  //   return this.getResourse("/people/");
  // }
  // getPerson(id) {
  //   return this.getResourse(`/people/${id}/`);
  // }
  // getPlanets() {
  //   return this.getResourse("/planets/");
  // }
  // async getPlanet(id) {
  //   const result = await this.getResourse(`/planets/${id}/`);
  //   return this.transformPlanet(result);
  // }
}
