<?php
include_once 'contatoClass.php';
if($_POST['funcao'] == 'inserir'){
    $dados = $_POST["dado"];
    $contatoObj = new Contato($dados);
    $contatoObj->cadastrar($dados);
}


