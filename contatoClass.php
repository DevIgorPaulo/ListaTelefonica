<?php
include("conexaoClass.php");

class Contato {
    public $nome;
    public $telefone;
    public $cor;
    public $data;
    public $operadora;
    public $serial;
    public $dados;
    

    public function __construct($dados) {
        $this->dados = $dados;
    }

    public function getnome() {
        return $this->nome;
    }
    public function getTelefone() {
        return $this->telefone;
    }
    public function getcor() {
        return $this->cor;
    }
    public function getdata() {
        return $this->data;
    }
    public function getoperadora() {
        return $this->operadora;
    }
    public function getserial() {
        return $this->serial;
    }
    public function setnome($nomeS) {
        $this->nome = $nomeS;
    }
    public function setTelefone($telefoneS) {
        $this->telefone = $telefoneS;
    }
    public function setcor($corS) {
        $this->cor = $corS;
    }
    public function setdata($dataS) {
        $this->data = $dataS;
    }
    public function setoperadora($operadoraS) {
        $this->operadora = $operadoraS;
    }
    public function setserial($serialS) {
        $this->nome = $serialS;
    }

    public function cadastrar() {
        $db = new Conexao();
        $db->insert($this->dados);
       

    }
}
