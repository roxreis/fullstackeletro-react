import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/footer'
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Routes from './routes';

import '../src/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Container>
      <div className="App">
        <header><Menu /></header>
        <main>
            <Routes />
        </main>
        <Footer />
      </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;