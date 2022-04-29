// Dados enviado do cliente
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true}
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true}
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false}

//
if (produtoA.internacional == true) {
    impostoA = parseInt((produtoA.valor) * 1.2)
    console.log("O produto é internacional" + " - Valor atualizado: " + impostoA)
} else {
    impostoA = parseInt((produtoA.valor) * 1.12)
    console.log("O produto é nacional" + "Valor atualizado: " + impostoA)
}

//
if (produtoB.internacional == true) {
    impostoB = parseInt((produtoB.valor) * 1.2)
    console.log("O produto é internacional" + " - Valor atualizado: " + impostoB)
} else {
    impostoB = parseInt((produtoB.valor) * 1.12)
    console.log("O produto é nacional" + "- Valor atualizado: " + impostoB)
}

//
if (produtoC.internacional == true) {
    impostoC = parseInt((produtoC.valor) * 1.2)
    console.log("O produto é internacional" + " - Valor atualizado: " + impostoC)
} else {
    impostoC = parseInt((produtoC.valor) * 1.12)
    console.log("O produto é nacional" + "- Valor atualizado: " + impostoC)
}