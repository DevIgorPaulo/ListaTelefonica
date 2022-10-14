angular.module("ListaTelefonica").filter("name", function() {
    return function (input) {
        var listadeNomes = input.split(" ")
        var listadeNomesFormatada = listadeNomes.map(function (nome) {
            if (/(da|de)/.test(nome))return nome
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase()
        })
        
        return listadeNomesFormatada.join(" ")
    }
})