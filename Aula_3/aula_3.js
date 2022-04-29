// Usando o console.log
console.log ("Olá, mundo! Primeiro programa da ITuring")

// Declarando variáveis
let idade = 18;
let nome = "Sid Nascimento";
let boolA = true;
let boolB = false;
let lista = [18, 20, 40, "Ju", 10, "Sid", [1, 2, 3, 'José']];
let mapa = {
    "faculdade": ['boletim, carteirinha, provas'],
    "casamento": ['casa', 'certidão'],
    "anos_de_casado": 30
}

// Vendo as variáveis na tela
console.log(idade)
console.log(nome)
console.log(boolA)
console.log(boolB)
console.log(lista)
console.log(mapa)

// Podemos acessar pedaços de lista e mapas
console.log(lista[5])
console.log(mapa['anos_de_casado'])

// Tipagem Estática: Preciso dizer para o computador o tipo de variável que estou criando.
// Tipagem Dinâmica: O computador já percebe o tipo de variável que está sendo usada.

// Podemos trocar o valor de uma variável sem precisar usar o let para declara novamente
let n1 = 10;
console.log(n1)

n1 = "Teste de texto"
console.log(n1)

// Podemos fazer contas com variáveis
let numero_a = 10
let numero_b = 15
let soma = (numero_a + numero_b) / 2
console.log(soma)

let name = "Sid";
let lasname = "Nascimento"
// console.log(name + lastname)

// Desagio
let texto = "11"
let n2 = 1
//console.log(texto + numero)
//console.log(texto - numero)



// Condicionais
if (numero_a != 2) {
    console.log("É Verdade")
} else {
    console.log("Não é verdade")
}

/*

< - é menor
> - é maior
== - é igual
!= - é diferente
>= - é maior ou igual
<= - é menor ou igual

*/