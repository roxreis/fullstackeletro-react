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



if (isset($_POST['nomeCliente'])) {

    $id_cliente = $_POST['id_cliente'];
    $id_produto = $_POST['id_produto'];
    $produtoCliente = $_POST['produtoCliente'];
    $valorUnitario = $_POST['valorUnitario'];
    $quantidade = $_POST['quantidade'];
    $valorUnitario = $_POST['unitarioCliente'];
    $totalPedido = $_POST['totalPedido'];


    $inserir = "INSERT INTO pedidos (id_cliente, id_prod, nome_produto, valor_unitario, quantidade, valor_total) VALUES ('$id_cliente', '$id_produto', '$produtoCliente', '$valorUnitario', '$quantidade','$totalPedido' )";


    if (mysqli_query($con, $inserir)) {
        echo "<script> alert('Pedido cadastrado com sucesso! Você voltará para página anterior')</script>";
        echo '<div class="d-flex justify-content-center text-center mb-5 text-danger">
                 <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
             </div>';
        header("refresh: 1;'form-pedidos.php");

    } else {

        printf("<h2>Errormessage: %s\n", mysqli_error($con)."</h2>"); 
        die;
    
    }
}