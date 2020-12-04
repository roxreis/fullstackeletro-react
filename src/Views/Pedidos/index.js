import Pedidos from '../../Components/Pedidos/Pedido';
import '../../css/style.css';

export default function ViewPedidos() {
//     const [form, setForm] = useState({
//         nome: "",
//         endereco: "",
//         fone: "",
//         valor: "",
//         quantidade: "",
//         preco_final: ""
//     });

//     const controleMudanca = (evento) => {
//         console.log(evento.target.value)
//         setForm({
//             ...form,
//             [evento.target.id]: evento.target.value
//         })
//     }

//     const controleEnvio = async (evento) => {
//         evento.preventDefault();
//         const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade);
//         document.getElementById("preco_final").value = `R$ ${preco_final}`;

//         setForm({
//             ...form,
//             preco_final: preco_final
//         })

//         const json = JSON.stringify(form);
//         const opcoes = {
//             crossDomain: true,
//             mode: 'cors',
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         }
//         const resposta = await fetch("http://localhost:80/produtos.php", opcoes);
//         const dados = await resposta.json()
//         console.log(dados);
//     }

    return (

        <section className=" container d-flex justify-content-between">
            {/* <div className="div-form-pedidos">
                <Form onSubmit={controleEnvio} className="form-pedidos">
                    <h2>Cadastre os Pedidos</h2>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Id_Cliente</Form.Label>
                        <Form.Control as="select" custom>
                        <option>1</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Id_Produto</Form.Label>
                        <Form.Control as="select" custom>
                        <option>1</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nome do Produto</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="produtoCliente" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valorUnitario" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Total</Form.Label>
                        <Form.Control disabled type="text" id="totalPedido" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Cadastrar</Button>
                </Form>
            </div> */}

 
       
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <Pedidos />
                </div>

           
        </section>
        

    );
}