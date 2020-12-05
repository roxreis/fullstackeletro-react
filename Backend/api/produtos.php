<?php 

require_once('../conexao.php');

$sql = 'SELECT * FROM produtos';
$result = consultar($sql);

$products = [];

while ($row = mysqli_fetch_assoc($result)) {
    $products[] = $row;
}

echo json_encode($products);
header("Access-Control-Allow-Origin:*");
