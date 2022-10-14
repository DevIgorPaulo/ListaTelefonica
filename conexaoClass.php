<?php
class Conexao {
    private $host = "127.0.0.1";
    private $db_name = "lista_telefonica";
    private $username = "root";
    private $password = "";
    private $con;

    public function __construct() {
        try {
            $this->con = new PDO("mysql:host=$this->host;
                                        dbname=$this->db_name",
                                        $this->username,
                                        $this->password);
            $this->con->setAttribute(PDO::ATTR_ERRMODE,
                                    PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }

        
    }
    public function returnconnection() {
        return $this->con;
    }

    public function execute($query) {
        try{
            $statement = $this->con->prepare($query);
            $statement->execute();
            return $statement;
        }catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    } 

    public function insert($dados) {
        $query = "INSERT INTO contatos (nome,telefone,cor,data,operadora,serial) VALUES (?,?,?,?,?,?)";
        $this->execute($query, $dados);
        
    }

}