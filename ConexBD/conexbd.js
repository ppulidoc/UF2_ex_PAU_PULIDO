const Sequelize = require("sequelize");

// Retorna la conexio a la base de dades
const crearConfigBaseDades = () => {
  return new Sequelize("uni_pau_pulido", "root", "admin123", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min:0,
      acquire: 30000,
      idle: 10000
    }
  })
}

//Exportar el modul
module.exports = {crearConfigBaseDades};
