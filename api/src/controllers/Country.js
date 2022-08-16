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

          //   // Extra properties
          officialName: c.name.official ? c.name.official : "Not Found", // this.name,
          region: c.region,
          unMember: c.unMember,
          //   currencies: c.currencies[Object.keys(c.currencies)[0]].name,
          maps: c.maps.googleMaps ? c.maps.googleMaps : "Not Found",
          timezones: c.timezones[0],
        },
      })
    );
    // Success msg if an axios request was sent to the API
    const msg = `Counties successfully added to database.`;
    console.log(msg);
    return msg;
  } catch (e) {
    // Error msg in case the request failed
    console.error(`Error @ controllers/getCountries --→ ${e.message}`);
  }
};

// findAll COUNTRIES once saved in DB
const findCountries = async () => {
  try {
    const find = await Country.findAll();
    // Success msg for DB countries' data being called
    console.log(`findCountries was executed successfully.`);
    return find;
  } catch (e) {
    // Error msg in case data call failed
    console.error(`Error @ controllers/findCountries --→ ${e.message}`);
  }
};

// ------------------------------------------------------------

// get countries by id
const getCountryById = async (id) => {
  try {
    return await Country.findByPk(id, { include: [Activity] });
  } catch (e) {
    console.error(`Error @ controllers/getCountryById --→ ${e.message}`);
  }
};

// get countries by name

module.exports = {
  getCountries,
  findCountries,
  getCountryById,
};
