

import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
// import Pedidos from '../../Componentes/Pedidos/Pedidos'


export default function CadastraPedidos() {

    const controleEnvio = async (evento) => {
        

        const url = "http://localhost/fseletro-react/Backend/api/cadastroPedidos.php";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados
        };

        const resposta  = await fetch(url, cabecalho);
        const resultado = await resposta.json();
        console.log(resultado);
    }
    // const [form, setForm] = useState({
    //     id_cliente: '',
    //     id_produto: '',
    //     produto_cliente: '',
    //     valor_unitario: '',
    //     quantidade: '',
    //     total_pedido: '',

    // });

    // const controleMudanca = (evento) => {
    //     console.log(evento.target.value)
    //     setForm({
    //         ...form,
    //         [evento.target.id]: evento.target.value
    //     })
    // }   
   

    // const controleEnvio = async (evento) => {
    //         evento.preventDefault();
    //         const total_pedido = parseFloat(form.valor_unitario) * parseFloat(form.quantidade);
    //         document.getElementById("total_pedido").value = `R$ ${total_pedido}`;

    //         setForm({
    //             ...form,
    //             totalPedido: total_pedido
    //         })

    //         const json = JSON.stringify(form);

    //         const opcoes = {
    //             crossDomain: true,
    //             method: 'POST',
    //             body: json
    //         }

    //         const resposta = await fetch("http://localhost/fseletro-react/Backend/api/cadastroPedidos.php", opcoes);
    //         const dados = await resposta.json()
    //         console.log(dados);
    //     } 
     
        // const url = "http://localhost/fseletro-react/Backend/api/cadastroPedidos.php", opcoes;
        // const dados = new FormData(evento.target);
        // const cabecalho = {
        //     method: "POST",
        //     body: dados
        // };

        // const resposta = await fetch(url, cabecalho);
        // const resultado = await resposta.json();
        // console.log(resultado);


  





        //         const json = JSON.stringify(form);
        //         const opcoes = {
        //             crossDomain: true,
        //             mode: 'cors',
        //             method: 'POST',
        //             headers: {'Content-type': 'application/json', "Acces-Control-Allow-Origin": "*"},
        //             body: json
        //         }

        //             const resposta = await fetch("http://localhost/fseletro-react/Backend/api/cadastroPedidos.php", opcoes)
                    
        //             const dados = await resposta.json();
        //             console.log(dados);
      
    
    return (

        <section className=" d-flex justify-content-between">
             

            <div className="div-form-pedidos">
            <div class="alert alert-danger" role="alert">
                  formulário em construção!
                </div> 
                <Form  onSubmit={controleEnvio} className="form-pedidos">
                    <h2>Cadastre os Pedidos</h2>
                    <Form.Group >
                        <Form.Label>Id_Cliente</Form.Label>
                        <Form.Control as="select"  id="id_cliente" name="id_cliente" custom>
                            <option value="1">1</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Id_Produto</Form.Label>
                        <Form.Control as="select"  id="id_produto"  name="id_produto" custom>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nome do Produto</Form.Label>
                        <Form.Control as="select"  id="produto_cliente" name="produto_cliente" custom>
                            <option value="1">1</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control type="text" id="valor_unitario" name="valor_unitario" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control type="text" id="quantidade" name="quantidade" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Total</Form.Label>
                        <Form.Control type="text" id="total_pedido" name="total_pedido" disabled />
                    </Form.Group>
                    <Button variant="primary" className="btn-pedidos "type="submit">Cadastrar</Button>
                </Form>
            </div>

        </section>

    );

}


