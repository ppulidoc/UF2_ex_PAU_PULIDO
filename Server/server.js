const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const {crearConfigBaseDades} = require("D:\\UF2_ex_PAU_PULIDO\\ConexBD\\conexbd.js");
const db = crearConfigBaseDades();
var initModels = require("../src/app/models/init-models");

models = initModels(db);
app.use(cors());

app.use(express.json());
port = 3080;


app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`)
})

// Conexió a la base de dades //

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'uni_pau_pulido'
})
connection.connect((err) => {

  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);

});

connection.connect();

// Ex 1 Select i al frontend

app.post('/dades', (req, res) => {
  const results = connection.query('SELECT ASSIG_CODI, ASSIG NOM FROM ASSIGNATURES, ASSIGNATURES_PROFESSOR, PROFESSOR, DEPARTAMENT WHERE ASSIG_CODI = ASSIGPROF_ASSIG_CODI, ASSIGPROF_PROF_DNI = PROF_DNI, PROF_DNI = DEPT_PROF_DNI,  DEPT_CODI = 1 ', (error, results, fields) => {
    console.log("Select realitzat");
    console.log(results);
    res.json(results);
  });
  console.log(results);
});

// Ex2 Afegir zodiac (Funciona)

app.post('/ex2', async (req,res) => {
  const sql = "ALTER TABLE alumnes ADD COLUMN alumnes_zodiac VARCHAR(20)";

  connection.query(sql, function (err, result) {
    if (err) console.log('Noi vas tard, ja està creat');
    else
    console.log("Agregat");
  });
})

// Ex3 Afegir deot

app.post('/api/afegirDept', async (req,res) => {
  const dades = req.body;
  const sql = "ALTER TABLE DEPARTAMENT ADD COLUMN dades.nom VARCHAR(20)";

  connection.query(sql, function (err, result) {
    if (err) console.log('No puc pelacanyes');
    else
      console.log("Agregat");
  });

})

