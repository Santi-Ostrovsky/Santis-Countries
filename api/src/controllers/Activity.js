const { Country, Activity } = require("../db");

// get activities
const getActivities = async () => {
  try {
    // Bring all activities from the DB (including countries)
    const find = await Activity.findAll({ include: [Country] });
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
    const { name, difficulty, duration, season } = content;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    console.log(`Activity successfully added to database:\n${newActivity}`);
    return newActivity;
  } catch (e) {
    // Error msg in case data insertion failed
    console.error(`Error @ controllers/addActivity --> ${e}`);
  }
};

// PUT --> updateActivity
const updateActivity = async (id, content) => {
  try {
    const { name, difficulty, duration, season } = content;
    const activity = await Activity.findByPk(id);
    // update fields gotten by content
    if (name) activity.name = name;
    if (difficulty) activity.difficulty = difficulty;
    if (duration) activity.duration = duration;
    if (season) activity.season = season;
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
      const msg = `Activity deleted successfully:\n${activity}`;
      console.log(msg);
      return msg;
    }
    const msg = `Activity does not exist`;
    console.log(msg);
    return msg;
  } catch (e) {
    // Error msg in case row delete failed
    console.error(`Error @ controllers/deleteActivity --> ${e}`);
  }
};

module.exports = { getActivities, addActivity, updateActivity, deleteActivity };
