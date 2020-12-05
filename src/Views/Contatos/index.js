import { Form, Button, Row } from 'react-bootstrap';
import Whatsapp from '../../img/zap.jpg';
import '../../css/style.css';



export default function Contatos() {
    return (
        <Row className="justify-content-center">
            <section className="section-contato">
                <h1 className="text-center">Contato</h1>
                <div className= "zap-contato">
                    <img src={Whatsapp} alt="whatsapp" />
                    <p>11 8888888888</p>
                </div>
                <Form variant="white" className="form-contato">
                    <h4 className="text-center">Deixe sua mensagem</h4>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome Sobrenome" />
                    </Form.Group>    
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" aria-describedby="emailHelp" placeholder="nome@nome" />
                    </Form.Group>  
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="success" className="button-contato" type="submit">Enviar</Button>{' '}
                </Form>
            </section>
        </Row>
    )
}