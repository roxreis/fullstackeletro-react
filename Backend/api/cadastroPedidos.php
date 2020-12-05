
<?php 
require_once('../conexao.php');
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id_cliente     = $_POST['id_cliente'];
    $id_produto     = $_POST['id_produto'];
    $produtoCliente = $_POST['produto_cliente'];
    $valorUnitario  = $_POST['valor_unitario'];
    $quantidade     = $_POST['quantidade'];
    $totalPedido    = $_POST['total_pedido'];


    $sql = "INSERT INTO pedidos VALUES (NULL,'$id_cliente', '$id_produto', '$produtoCliente', '$valorUnitario', '$quantidade','$totalPedido')";

   inserir($sql);
   

    echo json_encode(array("msg" => "Post ok"));
 

}

 


