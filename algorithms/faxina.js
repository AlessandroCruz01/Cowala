function faxina(obj) {
    if (typeof(obj) === "object"){
        for (var nulo in obj) { 
            if (obj[nulo] === null) {
                delete obj[nulo];
            }
            }
            return obj
    } else {
        console.log(typeof(obj))
        return "Parametro desta funcao dever ser obrigatoriamente um Objeto {}"
    }


}

// console.log(faxina("alessandro")) //Teste de validação
// console.log(faxina({"fizz":"buzz", "foo": null, "bar": 42})) //Teste de validação proposto
console.log(faxina({"teste1": "ok", "teste2": {"comTeste3": "Ok"}, "Teste4": null}))