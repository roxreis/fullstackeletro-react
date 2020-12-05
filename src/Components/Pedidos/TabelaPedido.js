import React, { useState, useEffect } from 'react';
import '../../css/style.css';


const ListPedidos = () => {
    const [pedidos, setPed] = useState([]);

    useEffect(() => {
        async function fectchData() {
            const url = await fetch("http://localhost/fseletro-react/Backend/api/pedidos.php");
            setPed(await url.json());
        }
        fectchData();
    }, [])


    return (
        <> {
            pedidos.map(ped => {
                return (
                        <div className="table-wrapper-scroll-y my-custom-scrollbar overflow-auto div-table-pedidos" >
                            <table className="table table-bordered table-hover display dataTable dtr-inline table-pedidos ">
                                <thead>
                                    <tr>
                                        <th scope="col">Numero Pedido</th>
                                        <th scope="col">Id Cliente</th>
                                        <th scope="col">Id Produto</th>
                                        <th scope="col">Nome Produto</th>
                                        <th scope="col">Valor Unitario</th>
                                        <th scope="col">Quant</th>
                                        <th scope="col">Valor Total</th>
                                        <th scope="col">Data Pedido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr> 
                                            <th scope="row">{ped.id_pedido}</th>
                                            <td>{ped.id_cliente} </td>
                                            <td>{ped.id_prod} </td>
                                            <td>{ped.nome_produto} </td>
                                            <td>{ped.valor_unitario} </td>
                                            <td>{ped.quantidade} </td>
                                            <td>{ped.valor_total} </td>
                                            <td>{ped.data_pedido} </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                )
            })
        }
        </>
    )
}

export default ListPedidos;
