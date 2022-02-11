<?php
require 'connection.php';
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
if($_SERVER["REQUEST_METHOD"]=="GET"){

    $value= $_GET["id"];
    $sql=$pdo->prepare("DELETE FROM products WHERE id='$value' ");
    $sql->execute();
    echo json_encode($sql);

    // header('Location:http://localhost/Project/admin/tables.php');
}

?>