const { Router } = require("express");
const {
  getCountries,
  findCountries,
  getCountryById,
} = require("../controllers/Country");
const {
  getActivities,
  addActivity,
  updateActivity,
  deleteActivity,
} = require("../controllers/Activity");
const { Country } = require("../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/countries", countries);
// router.use("/activities", activities);

// --------------
// COUNTRY ROUTES
// --------------

// GET @ /COUNTRIES + /COUNTRIES ? NAME (QUERY)
router.get("/countries", async (req, res) => {
  try {
    let { name } = req.query;
    if (name)
      name = name
        .trim()
        .split(" ")
        .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
        .join(" ");
    // verify if DB is empty
    const count = await Country.count();
    // if DB is empty, execute getCountries
    if (!count) await getCountries();
    // once the DB has all API data, execute findCountries
    const find = await findCountries(name);
    find.length
      ? res.json(find)
      : res.status(400).send("Error @ routes/index/countries");
    // res.send(await findCountries());
  } catch (e) {
    // console.error(e.message);
    res.status(404).send(`Error --→ ${e}`);
  }
});

// GET @ /COUNTRIES /ID (PARAMS)
router.get("/countries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    /*
    // verify DB  is empty
    const count = await Country.count();
    // if DB is empty, execute getCountries
    if (!count) await getCountries();
    */
    // once the DB has all API data, execute getCountryById
    res.json(await getCountryById(id.toUpperCase()));
  } catch (e) {
    // console.error(e.message)
    res.status(404).send(`Error --→ ${e}`);
  }
});

// ----------------
// ACTIVITY ROUTES
// ----------------

// GET @ /ACTIVITIES
router.get("/activities", async (req, res) => {
  try {
    const { id } = req.params;
    // AGREGAR ID
    const find = await getActivities(id);
    find.length ? res.json(find) : res.send(`No activities were created yet!`);
  } catch (e) {
    res.status(404).send(`Error --> ${e}`); // Not found
  }
});

// POST @ /ACTIVITIES
router.post("/activities", async (req, res) => {
  try {
    // const { name, difficulty, duration, season } = req.body;
    const newActivity = await addActivity(req.body);
    res.status(201).send(newActivity);
  } catch (e) {
    res.status(400).send(`Error --> ${e}`); // Bad request
  }
});

// PUT @ /ACTIVITIES /ID (PARAMS)
router.put("/activities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedActivity = await updateActivity(id, req.body);
    res.send(updatedActivity);
  } catch (e) {
    res.status(404).send(`Error --> ${e}`); // Not found
  }
});

// DELETE @ /ACTIVITIES /ID (PARAMS)
router.delete("/activities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteActivity(id);
    res.send(`Activity deleted successfully`);
  } catch (e) {
    res.status(400).send(`Error --> ${e}`); // Bad request
  }
});

module.exports = router;
