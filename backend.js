import fs from "fs";
import {onEvent,startServer} from "soquetic";

let pesdidos = JSON.parse(fs.readFileSync("./data/pedidos.json", "utf-8"))
function responder_a_sabores() {
    let sabores = JSON.parse(fs.readFileSync("./data/sabores.json", "utf-8"));
    return sabores;
}

function responder_a_productos() {
    let productos = JSON.parse(fs.readFileSync("./data/productos.json","utf-8"));
    return productos;
}

function responder_a_pedido(data) {
    pesdidos.push(data);
    fs.writeFileSync("./data/pedidos.json", JSON.stringify(pesdidos));

    return {ok : true};
}
onEvent("sabores", responder_a_sabores);
onEvent("productos", responder_a_productos);
onEvent("pedido", responder_a_pedido);

startServer();