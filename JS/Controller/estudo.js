angular.module("ListaTelefonica", [])
        angular.module("ListaTelefonica").controller("ListaTelefonicaContrl", function($scope, serialGenerator){
            $scope.app = "Lista Telefonica"
            $scope.contatos = [
                {nome: "pedro da rosa" , telefone: "(47)9999-8372", cor: "red", data: new Date(), operadoras: {nome: "Oi", codigo: "52"},serial:"<12/,"},
                {nome: "CLEBER MORAES" , telefone: "(11)9283-9273" , cor: "blue", data: new Date(), operadoras: {nome: "Claro", codigo: "19"},serial:".>82|2"}      ,
                {nome: "JoÃo ConsTantInO" , telefone: "(48)3526-9012" , cor: "green", data: new Date(), operadoras: {nome: "Tim", codigo: "15"},serial:";:2\1"}
            ] 
            $scope.operadoras = [
                {nome: "Oi", codigo: 52, categoria: "Celular", preco: 1},
                {nome: "Tim", codigo: 15, categoria: "Celular", preco: 2},
                {nome: "Claro", codigo: 19, categoria: "Celular", preco: 2},
                {nome: "GVT", codigo: 26, categoria: "Fixo", preco: 3},
                {nome: "Embratel", codigo: 45, categoria: "Fixo", preco: 1},
            ]
            /*$scope.cor = [
                {nome: "Verde", cod: "green"},
                {nome: "Azul", cod: "blue"},
                {nome: "Vermelho", cod: "red"},
                {nome: "Amarelo", cod: "yellow"}
            ]*/
            $scope.adicionarContato = function  (contato) {
                contato.serial = serialGenerator.generate()
                
                //$scope.contatos.push(angular.copy(contato))
                delete $scope.contato
                $scope.contatoForm.$setPristine()
                $.ajax({
                    url: "http://localhost/contatoModel.php",
                    type: "POST",
                    data: {dado : contato, funcao: 'inserir'},
                    dataType: "text"
                    
                }).done(function(resposta) {
                    console.log(resposta);
                    alert("cadastro feito com sucesso")
                    
                
                }).fail(function(jqXHR, textStatus ) {
                    console.log("Request failed: " + textStatus);
                
                }).always(function() {
                    console.log("completou");
                   
                });
                
                
            }
            $scope.apagarContatos = function (contatos) {
                var apagar = window.confirm("Você deseja apagar este contato?")
                if (apagar){
                $scope.contatos = contatos.filter (function (contato) {
                    if (!contato.selecionado) return contato;
                })
            }
            }
            $scope.iscontatosSelecionados = function (contatos) {
                return iscontatosSelecionados = contatos.some(function (contato) {
                    return contato.selecionado 
                })
                
                
            }
            $scope.orderPor = function (campo) {
                $scope.criteriodeOrdenacao = campo
                $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao 
            }
    
        })