import fs from "fs";
import {onEvent, startServer} from "soquetic";

let sabores = JSON.parse(fs.readFileSync("data/sabores.json", "utf-8"));
let productos = JSON.parse(fs.readFileSync("data/productos.json", "utf-8"));
let pedidos = JSON.parse(fs.readFileSync("data/pedidos.json", "utf-8"));

onEvent("sabores",() => {
    return sabores;
})

onEvent("productos",() => {
    return productos;
})

onEvent("pedidos",(algo) => {
    fs.writeFileSync("data/pedidos.json", JSON.stringify(algo));
    return {ok : true};
})
