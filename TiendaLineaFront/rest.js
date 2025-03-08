const IP = "192.168.3.201";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";
export const getAllVenta = (fnRefreshList) => {
  fetch(URL + "ventas")
    .then((response) => {
      return response.json();
    })
    .then((ventas) => {
      fnRefreshList(ventas);
    });
};
export const saveVentaRest = (venta, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cli_id: venta.cli_id,
      pro_id: venta.pro_id,
      ven_cantidad: venta.ven_cantidad,
      ven_fecha: venta.ven_fecha,
    }),
  };
  fetch(URL + "ventas", config)
    .then((response) => response.json())
    .then((body) => {
      fnShowMessage("venta creado");
      console.log(body);
    });
};
export const getAllProducto = (fnRefreshList) => {
  fetch(URL + "productos")
    .then((response) => {
      return response.json();
    })
    .then((ventas) => {
      fnRefreshList(ventas);
    });
};
export const saveProductoRest = (producto, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pro_nombre: producto.pro_nombre,
      cat_id: producto.cat_id,
      pro_precio: producto.pro_precio,
      pro_stock: producto.pro_stock,
    }),
  };
  fetch(URL + "productos", config)
    .then((response) => response.json())
    .then((body) => {
      fnShowMessage("producto creado");
      console.log(body);
    });
};
