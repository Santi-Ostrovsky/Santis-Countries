const { Country, Activity, Country_Activity } = require("../db");
const { Op } = require("sequelize");

// get activities
const getActivities = async () => {
  try {
    // Bring all activities from the DB (including countries)
    const find = await Activity.findAll(
      { order: ["id"] },
      { include: [Country] }
    );
    //
    console.log(`getActivities was executed successfully`);
    return find;
  } catch (e) {
    // Error msg in case data call failed
    console.error(`Error @ controllers/getActivities --> ${e}`);
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
    return newActivity;
  } catch (e) {
    // Error msg in case data insertion failed
    console.error(`Error @ controllers/addActivity --> ${e}`);
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

    // Add the activity to new countries
    await countries.map((c) =>
      Country_Activity.findOrCreate({
        where: {
          CountryId: c,
          ActivityId: id,
        },
      })
    );

    // Remove activity from old countries
    await countries.map((c) =>
      Country_Activity.destroy({
        where: {
          CountryId: {
            [Op.not]: c,
          },
          ActivityId: id,
        },
      })
    );

    return activity;
  } catch (e) {
    console.error(`Error @ controllers/updateActivity --> ${e}`);
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
    console.error(`Error @ controllers/deleteActivity --> ${e}`);
  }
};

module.exports = { getActivities, addActivity, updateActivity, deleteActivity };
