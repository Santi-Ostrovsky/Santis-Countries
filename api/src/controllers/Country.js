const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db");
// const { Op } = require("sequelize");

const PATH = "https://restcountries.com/v3/";
const ERROR = "Error @ controllers/";

// getCountries (Save all API data into the DB)
const getCountries = async () => {
  try {
    let api = (await axios.get(`${PATH}all`)).data;
    // console.log(api);
    // map api properties to create countries table rows
    api = await api?.map((c) =>
      Country.findOrCreate({
        where: {
          // Required properties
          id: c.cca3,
          name: c.name.common,
          flag: c.flags[1] ? c.flags[1] : "Image not found",
          continent: c.continents[0],
          capital: c.capital ? c.capital[0] : c.name.common,
          subregion: c.subregion ? c.subregion : c.region,
          area: c.area,
          population: c.population,

          // Extra properties
          officialName: c.name.official ? c.name.official : c.name.common, // this.name,
          region: c.region,
          unMember: c.unMember,
          // currencies: c.currencies[Object.keys(c.currencies)[0]].name,
          maps: `https://www.google.com/maps/place/${c.name.common}`,
          timezones: c.timezones[0],
        },
      })
    );
    // Success msg if an axios request was sent to the API
    console.log(`Counties successfully added to database.`);
  } catch (e) {
    // Error msg in case the request failed
    console.error(`${ERROR}getCountries --→ ${e}`);
  }
};

// findAll COUNTRIES once saved in DB
const findCountries = async (name) => {
  try {
    let find;
    // If name is given, find only ONE Country
    if (name) {
      find = await Country.findAll(
        { where: { name: { [Op.iLike]: `%${name}%` } } },
        { include: [Activity] }
      );
      console.log(`findCountries?name was executed successfully.`);
    } else {
      // If name is NOT given, bring all Countries from DB
      find = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      console.log(`findCountries was executed successfully.`);
    }
    return find.map((c) => {
      return {
        id: c.id,
        name: c.name,
        continent: c.continent,
        flag: c.flag,
        population: c.population,
        activities: c.activities,
      };
    });
  } catch (e) {
    // Error msg in case data call failed
    console.error(`${ERROR}findCountries --→ ${e}`);
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
    console.error(`${ERROR}getCountryById --→ ${e}`);
  }
};

// ------------------------------------------------------------

// get countries by name

module.exports = {
  getCountries,
  findCountries,
  getCountryById,
};
