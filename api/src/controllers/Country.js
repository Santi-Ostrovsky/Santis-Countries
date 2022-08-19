const axios = require("axios");
const { Country, Activity } = require("../db");
// const { Op } = require("sequelize");

// Save API request into a reusable variable

// getCountries (Save all API data into the DB)
const getCountries = async () => {
  try {
    let api = (await axios.get(`https://restcountries.com/v3/all`)).data;
    // console.log(api);
    api = await api?.map((c) =>
      Country.findOrCreate({
        where: {
          // Required properties
          id: c.cca3,
          name: c.name.common,
          flag: c.flags[1] ? c.flags[1] : "Not Found",
          continent: c.continents[0],
          capital: c.capital ? c.capital[0] : "Not Found",
          subregion: c.subregion ? c.subregion : "Not Found",
          area: c.area,
          population: c.population,

          // Extra properties
          officialName: c.name.official ? c.name.official : c.name.common, // this.name,
          region: c.region,
          unMember: c.unMember,
          // currencies: c.currencies[Object.keys(c.currencies)[0]].name,
          maps: c.maps.googleMaps ? c.maps.googleMaps : "Not Found",
          timezones: c.timezones[0],
        },
      })
    );
    // Success msg if an axios request was sent to the API
    console.log(`Counties successfully added to database.`);
  } catch (e) {
    // Error msg in case the request failed
    console.error(`Error @ controllers/getCountries --→ ${e}`);
  }
};

// findAll COUNTRIES once saved in DB
const findCountries = async (name) => {
  try {
    let find;
    // If name is given, find only ONE Country
    if (name) {
      find = await Country.findOne(
        { where: { name } },
        { include: [Activity] }
      );
      const arr = [find];
      console.log(`findCountries(name) was executed successfully.`);
      return arr;
    } else {
      // If name is NOT given, bring all Countries from DB
      find = await Country.findAll();
      console.log(`findCountries was executed successfully.`);
      console.log(find.length);
      return find;
    }
  } catch (e) {
    // Error msg in case data call failed
    console.error(`Error @ controllers/findCountries --→ ${e}`);
  }
};

// ------------------------------------------------------------

// get countries by id
const getCountryById = async (id) => {
  try {
    // Attempt to retrieve a single result from DB through ID (including activities)
    return await Country.findByPk(id, { include: [Activity] });
  } catch (e) {
    // Error msg in casa data call failed
    console.error(`Error @ controllers/getCountryById --→ ${e}`);
  }
};

// ------------------------------------------------------------

// get countries by name

module.exports = {
  getCountries,
  findCountries,
  getCountryById,
};
