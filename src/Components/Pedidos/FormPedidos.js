import { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';

export default function FormPedidos() {
    const [form, setForm] = useState({
        id_cliente: "",
        id_produto: "",
        produtoCliente: "",
        valorUnitario: "",
        quantidade: "",
        totalPedido: ""
    });

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        // const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade);
        // document.getElementById("preco_final").value = `R$ ${preco_final}`;

        // setForm({
        //     ...form,
        //     preco_final: preco_final
        // })

        const json = JSON.stringify(form);
        const opcoes = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }
        const resposta = await fetch("http://localhost/fseletro-react/Backend/api/pedidos.php", opcoes);
        const dados = await resposta.json()

    }


return (


    <section className=" container d-flex justify-content-between">
            <div className="div-form-pedidos">
                <Form onSubmit={controleEnvio} className="form-pedidos">
                    <h2>Cadastre os Pedidos</h2>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Id_Cliente</Form.Label>
                        <Form.Control as="select" id="id_cliente" name="id_cliente" custom>
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Id_Produto</Form.Label>
                        <Form.Control as="select"  id="id_produto" name="id_produto" custom>
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
                        <Form.Control onChange={controleMudanca} type="text" id="produtoCliente" name="produtoCliente"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valorUnitario" name="valorUnitario"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" name="quantidade" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Total</Form.Label>
                        <Form.Control  type="text" id="totalPedido"  name="totalPedido"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Cadastrar</Button>
                </Form>
            </div> 
    </section>
            
    );
}


