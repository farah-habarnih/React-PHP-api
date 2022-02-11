<?php
require 'connection.php';
$data= $pdo->query("SELECT * FROM products");
$data =$data->fetchAll(PDO::FETCH_ASSOC);
// var_dump($data);
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
echo json_encode($data);

?>