const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // define activity model

  // Required properties
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "uniqueActivity",
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: "uniqueActivity",
        validate: { min: 1, max: 5 },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: "uniqueActivity",
        validate: { min: 1, max: 24 }, // Hours
      },
      season: {
        type: DataTypes.ENUM("summer", "autumn", "winter", "spring"),
        allowNull: false,
        unique: "uniqueActivity",
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
      tableName: "activities",
    }
  );
};

/*


*/
