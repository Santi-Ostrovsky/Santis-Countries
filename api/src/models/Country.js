const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // define country model
  //
  sequelize.define(
    "country",
    {
      // Required properties
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "country-capital-flag",
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "country-capital-flag",
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        //   defaultValue: this.name,
        allowNull: false,
        unique: "country-capital-flag",
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      //
      // Extra properties
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      independent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      unMember: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      currencies: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maps: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      timezones: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    //
    // Modify default timestamp titles
    {
      timestamps: true,
      createdAt: "Created",
      updatedAtAt: "Updated",
    },
    //
    // Modify default table name
    {
      tableName: "countries",
    }
  );
};
