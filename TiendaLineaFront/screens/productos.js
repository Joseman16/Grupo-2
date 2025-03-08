const IP = "192.168.1.6";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllProductos = (fnRefreshList) => {
    console.log("getAllProductos");
    fetch(URL + "productos")
        .then((response) => response.json())
        .then((body) => {
            console.log(body);
            fnRefreshList(body);
        })
        .catch((error) => {
            console.error("Error fetching en productos:", error);
        });
};
  