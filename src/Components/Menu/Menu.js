import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../img/logo.png';
import '../../css/style.css';

function MenuPrin() {

    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="/" to="/">
                    <img src={Logo} alt="logo"  /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="d-flex justify-content-around w-100 menu">
                        <Nav.Item>
                            <strong><Nav.Link as={Link} className="text-white" href="/produtos" to="/produtos">PRODUTOS</Nav.Link></strong>
                        </Nav.Item>
                        <Nav.Item>
                        <strong><Nav.Link as={Link} className="text-white" href="/contatos" to="/contatos" >CONTATO</Nav.Link></strong>
                        </Nav.Item>
                        <Nav.Item>
                        <strong><Nav.Link as={Link} className="text-white" href="/pedidos" to="/pedidos">PEDIDOS</Nav.Link></strong>
                        </Nav.Item>
                        <Nav.Item>
                        <strong><Nav.Link as={Link} className="text-white" href="/lojas" to="/lojas">LOJAS</Nav.Link></strong>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

const Menu = withRouter(MenuPrin)

export default Menu;