const express = require("express");
const app = express();
const puerto = 3001;
const bodyParser = require("body-parser");
const { Client } = require("pg");
const cors = require("cors");
const { Pool } = require("pg"); 

app.use(cors()); // Habilita CORS en todas las rutas

const client = new Client({
  user: "postgres",
  host:"192.168.5.178",
  database: "Laptops",
  password: "Pedrito2002",
  port: "5432",
});


app.use(bodyParser.json());
//app.use("/contactos", bodyParser.json());

app.use("/tienda", (req, resp, next) => {
  //recuperar headers
  console.log("headers: ", req.headers);
  //recuperar body
  console.log("body: ", req.body);
  next();
});



client
  .connect()
  .then(() => console.log("Conectado a PostgreSQL"))
  .catch((err) => console.error("Error al conectar a PostgreSQL:", err));



app.use(bodyParser.json());
app.use(cors()); // Habilita CORS

// Obtener lista de contactos (GET)


app.get("/tiendaProducto", async (req, res) => {

  try {
    console.log("Solicitando producto...");
    const result = await client.query(
      "SELECT pro_id, pro_nombre, cat_id, pro_precio, pro_stock FROM productos"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ error: "Error al recuperar producto" });
  }
});

app.get("/tiendaProducto2", async (req, res) => {

  try {
    console.log("Solicitando producto...");
    const result = await client.query(
      "select pro.pro_id, pro.pro_nombre, cat.cat_nombre, pro.pro_precio, pro.pro_stock from productos pro, categorias cat where pro.cat_id = cat.cat_id"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ error: "Error al recuperar producto" });
  }
});

app.get("/tiendaVentas", async (req, res) => {
  
    try {
      console.log("Solicitando ventas...");
      const result = await client.query(
        "SELECT ven_id, cli_id, pro_id, ven_cantidad,ven_fecha FROM ventas"
      );
      res.json(result.rows);
    } catch (error) {
      console.error("Error al obtener ventas:", error);
      res.status(500).json({ error: "Error al recuperar ventas" });
    }
  });

  

//Metodos POST
app.post('/clientes', (req, res) => {
  const {nombre, telefono, direccion, email} = req.body;

  if (!nombre || !telefono || !direccion || !email) {
      return res.status(400).json({ error: "Faltan datos: nombre, telefono, direccion, email" });
  }

  client.query(
      "INSERT INTO clientes (cli_nombre, cli_telefono, cli_direccion, cli_email) VALUES ($1, $2, $3, $4) RETURNING *",
      [nombre, telefono, direccion, email]
  )
  .then((responseQuery) => {
      console.log("Cliente insertado:", responseQuery.rows[0]);
      res.json({
          mensaje: "Cliente agregado con éxito",
          cliente: responseQuery.rows[0],
      });
  })
  .catch((err) => {
      console.error("Error al insertar cliente:", err);
      res.status(500).json({ error: "Error al insertar cliente" });
  });
});


  /*app.post('/productos', (re, res) => {
      const nombre = request.body.nombre;
      const catId = request.body.categoria;
      const precio = request.body.precio;
      const stock = request.body.stock;

      client.query("INSERT INTO productos (pro_nombre, cat_id, pro_precio, pro_stock) VALUES ($1,$2,$3,$4) RETURNING *", [nombre, catId, precio,stock]).
          then(responseQuery => { response.send(responseQuery.rows[0]); client.end(); }).
          catch(err => { console.log(err); client.end(); })
  });

app.listen(port, () => {
    console.log("Servidor listo en el puerto "+puerto);
});

*/
/****************************************************************************/
/*Metodo POST
app.post("/tienda", (req, res) => {
  const { nombre, apellido, celular } = req.body;

  if (!nombre || !apellido || !celular) {
    return res
      .status(400)
      .json({ error: "Faltan datos: nombre, apellido o celular" });
  }

  client
    .query(
      "INSERT INTO contactos (nombre, apellido, celular) VALUES ($1, $2, $3)",
      [nombre, apellido, celular]
    )
    .then((responseQuery) => {
      console.log("Contacto insertado:", responseQuery.rows);
      res.json({
        mensaje: "Contacto agregado con éxito",
        contacto: responseQuery.rows[0],
      });
    })
    .catch((err) => {
      console.error("Error al insertar contacto:", err);
      res.status(500).json({ error: "Error al insertar contacto" });
    });
});

/****************************************************************************/


app.listen(puerto, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${puerto}`);
});
