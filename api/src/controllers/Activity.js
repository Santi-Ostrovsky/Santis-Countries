const { Country, Activity, country_activity } = require("../db");
const { Op } = require("sequelize");

const ERROR = "Error @ controllers/";

// get activities
const getActivities = async (id) => {
  try {
    let find;
    // If ID is given, find only ONE Activity
    if (id) {
      find = await Activity.findByPk(id, { include: [Country] });
      console.log(`getActivities/id was executed successfully.`);
      return [find];
    } else {
      // If not, bring all activities from the DB (including countries)
      find = await Activity.findAll({ order: ["id"] }, { include: [Country] });
      //
      console.log(`getActivities was executed successfully`);
      return find;
    }
  } catch (e) {
    // Error msg in case data call failed
    console.error(`${ERROR}getActivities --> ${e}`);
  }
};

// Post --> addActivity
const addActivity = async (content) => {
  try {
    const { name, difficulty, duration, season, countries } = content;
    // Create new activity
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countries,
    });
    //   Link activity to its countries
    await newActivity.addCountry(countries);

    console.log(`Activity successfully added to database`);
    return await Activity.findByPk(newActivity.id, {
      include: { model: Country, attributes: ["id"] },
    });
    // return newActivity;
  } catch (e) {
    // Error msg in case data insertion failed
    console.error(`${ERROR}addActivity --> ${e}`);
  }
};

// PUT --> updateActivity
const updateActivity = async (id, content) => {
  try {
    const { name, difficulty, duration, season, countries } = content;
    const activity = await Activity.findByPk(id);

    // update fields gotten by content
    if (name) activity.name = name;
    if (difficulty) activity.difficulty = difficulty;
    if (duration) activity.duration = duration;
    if (season) activity.season = season;

    // save changes on row and return updated activity
    await activity.save();

    // Add the activity to new countries -- ARREGLAR!!!
    // await countries.map((c) =>
    //   country_activity.findOrCreate({
    //     where: { CountryId: c, ActivityId: id },
    //   })
    // );

    // Remove activity from old countries -- ARREGLAR!!!
    // await countries.map((c) =>
    //   country_activity.destroy({
    //     where: { CountryId: { [Op.not]: c }, ActivityId: id },
    //   })
    // );

    return activity;
  } catch (e) {
    console.error(`${ERROR}updateActivity --> ${e}`);
  }
};

// delete activities
const deleteActivity = async (id) => {
  try {
    const activity = await Activity.destroy({ where: { id } });

    // Destroy returns an integer (amount of rows destroyed)
    if (activity > 0) {
      console.log(`Activity (id: ${id}) deleted successfully`);
    } else console.error(`Activity does not exist`);
  } catch (e) {
    // Error msg in case row delete failed
    console.error(`${ERROR}deleteActivity --> ${e}`);
  }
};

module.exports = { getActivities, addActivity, updateActivity, deleteActivity };
