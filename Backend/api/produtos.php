<?php 

require_once('../conexao.php');

$select = 'SELECT * FROM produtos';
$result = $con->query($select);
$products = [];

while ($row = mysqli_fetch_assoc($result)) {
    $products[] = $row;
}

echo json_encode($products);
header("Access-Control-Allow-Origin:*");
