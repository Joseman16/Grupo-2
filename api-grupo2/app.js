const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "192.168.1.9",
  database: "TiendaLinea",
  password: "awds123*",
  port: "5432",
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use("/productos", (request, response, next) => {
  console.log("headers: ", request.headers);
  console.log("body: ", request.body);
  next();
});

app.get("/productos", async (request, response) => {
  try {
    const client = await pool.connect();
    const responseQuery = await client.query(
      "SELECT pro.pro_id, pro.pro_nombre, cat.cat_id, cat.cat_nombre, pro.pro_precio, pro.pro_stock FROM productos AS pro JOIN categorias AS cat ON pro.cat_id = cat.cat_id;"
    );
    console.log(responseQuery.rows);
    response.send(responseQuery.rows);
    client.release();
  } catch (error) {
    console.log(error);
    response.status(500).send("Error retrieving contacts");
  }
});

app.post("/productos", async (request, response) => {
  try {
    const client = await pool.connect();
    const { pro_nombre, cat_id, pro_precio, pro_stock } = request.body;
    const query = await client.query(
      "INSERT INTO productos(pro_nombre, cat_id, pro_precio, pro_stock) VALUES($1, $2, $3, $4)",
      [pro_nombre, cat_id, pro_precio, pro_stock]
    );
    console.log(query);
    response.send(request.body);
    client.release();
  } catch (error) {
    console.log(error);
    response.status(500).send("Error crear producto");
  }
});

app.use("/ventas", (request, response, next) => {
  console.log("headers: ", request.headers);
  console.log("body: ", request.body);
  next();
});

app.get("/ventas", async (request, response) => {
  try {
    const client = await pool.connect();
    const responseQuery = await client.query("SELECT * FROM ventas");
    console.log(responseQuery.rows);
    response.send(responseQuery.rows);
    client.release();
  } catch (error) {
    console.log(error);
    response.status(500).send("Error retrieving contacts");
  }
});

app.post("/ventas", async (request, response) => {
  try {
    const client = await pool.connect();
    const { cli_id, pro_id, ven_cantidad, ven_fecha } = request.body;
    const query = await client.query(
      "INSERT INTO ventas(cli_id, pro_id, ven_cantidad, ven_fecha) VALUES($1, $2, $3, $4)",
      [cli_id, pro_id, ven_cantidad, ven_fecha]
    );
    console.log(query);
    response.send(request.body);
    client.release();
  } catch (error) {
    console.log(error);
    response.status(500).send("Error crear ventas");
  }
});

app.listen(port, () => {
  console.log("Servidor listo en el puerto: " + port);
});
