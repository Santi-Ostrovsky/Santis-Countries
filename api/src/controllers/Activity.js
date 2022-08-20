const { Country, Activity } = require("../db");

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
    console.log(find);
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
    if (!name || !difficulty || !duration || !season || !countries) {
      console.error("Missing Info");
      return;
    }
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
    //
    // PUT ACTIVITIES LINK TO COUNTRIES
    // save changes on row and return updated activity
    await activity.save();
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
      const msg = `Activity deleted successfully: ${activity}`;
      console.log(msg);
    }
    const msg = `Activity does not exist`;
    console.log(msg);
    return activity;
  } catch (e) {
    // Error msg in case row delete failed
    console.error(`Error @ controllers/deleteActivity --> ${e}`);
  }
};

module.exports = { getActivities, addActivity, updateActivity, deleteActivity };
