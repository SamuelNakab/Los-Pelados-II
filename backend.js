import fs from "fs";
import {onEvent,startServer} from "soquetic";
let pedidos = JSON.parse(fs.readFileSync('data/pedidos.json', 'utf8') || '[]');


function guardar_pedido(pedido){
    pedidos.push(pedido);
    fs.writeFileSync("data/pedidos.json",JSON.stringify(pedidos),null,2);

    return ({ok:true});
}
function poner_productos(){
    let productos= JSON.parse(fs.readFileSync("data/productos.json"));
    return productos;
}


function poner_sabores(){
    let sabores= JSON.parse(fs.readFileSync("data/sabores.json"))
    return sabores;
}
onEvent("sabores", poner_sabores)
onEvent("productos", poner_productos)
onEvent("pedido", guardar_pedido)


startServer();
