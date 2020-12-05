<?php 

require_once('../conexao.php');

$select = "SELECT * FROM pedidos
join produtos
on produtos.id = pedidos.id_prod
join clientes
on clientes.id = pedidos.id_cliente";

$result = $con->query($select);
$pedidos = [];

while ($row = mysqli_fetch_assoc($result)) {
    $pedidos[] = $row;
}

echo json_encode($pedidos);
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");

