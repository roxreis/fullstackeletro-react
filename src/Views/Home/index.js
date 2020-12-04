// import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Banner from '../../img/banner.jpg';


export default function ViewHome() {
    return (
            <section className="section-home">
                <div className="banner-home">
                    <img src={Banner} alt="banner"  />
                    <div>
                        <h1>BEM VINDOS A NOSSA LOJA!</h1>
                        <p>Aqui é barato mesmo!</p>
                    </div>
                </div>
            </section>
    );
}