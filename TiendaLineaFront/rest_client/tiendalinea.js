const ip = "192.168.1.9";
const port = 3001;
const url = "http://" + ip + ":" + port + "/";
export const getProductos = (fnRefreshList) => {
  fetch(url + "productos")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnRefreshList(body);
    });
};
export const saveProductoRest = (producto, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: contact.name,
      apellido: contact.surName,
      celular: contact.phoneNumber,
    }),
  };
  fetch(url + "productos", config)
    .then((response) => response.json())
    .then((body) => {
      fnShowMessage();
    });
};
export const getVentas = (fnRefreshList) => {
  fetch(url + "ventas")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnRefreshList(body);
    });
};
export const saveVentaRest = (venta, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: contact.name,
      apellido: contact.surName,
      celular: contact.phoneNumber,
    }),
  };
  fetch(url + "ventas", config)
    .then((response) => response.json())
    .then((body) => {
      fnShowMessage();
    });
};
