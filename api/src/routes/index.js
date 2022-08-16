const { Router } = require("express");
const {
  getCountries,
  findCountries,
  getCountryById,
} = require("../controllers/Country");
const activities = require("../controllers/Activity");
const { Country } = require("../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/countries", countries);
// router.use("/activities", activities);

// GET --> /COUNTRIES
router.get("/countries", async (req, res) => {
  try {
    // determine if database is empty
    const cont = await Country.count();
    // if database is empty, execute getCountries
    if (!cont) await getCountries();
    // once database has all data, execute findCountries
    const find = await findCountries();
    find.length ? res.json(find) : res.send("ERROR");
    // res.send(await findCountries());
  } catch (error) {
    console.log(error.message);
  }
});

// GET /COUNTRIES /ID (PARAMS)
router.get("/countries/:id", async (req, res) => {});

// GET / COUNTRIES /NAME (QUERY)
router.get("/countries", async (req, res) => {});

module.exports = router;
