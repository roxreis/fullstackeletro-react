import LojaRio from '../../img/lojas/loja-rio.jpg';
import LojaSp1 from '../../img/lojas/loja-sp1.jpg';
import LojaSp2 from '../../img/lojas/loja-sp2.jpeg';
import '../../css/style.css';


export default function Lojas() {
    return (
        <section className="section-lojas">
            <h1>Nossas Lojas</h1>
            <div className="row">
                <div className="d-flex">
                    <img src={LojaRio} alt="loja no Rio de Janeiro" /> 
                    <div >    
                        <h3>Rio de Janeiro</h3>                
                        <p>Av Presidente</p>
                        <p>10 &ordm; andar</p>
                        <p>Centro</p> 
                        <p>(21) 2222222</p> 
                    </div>
                </div>
                <div className="d-flex">
                    <img src={LojaSp1} alt="loja 1 em São Paulo" /> 
                    <div>          
                        <h3>São Paulo</h3>                
                        <p>Av Paulista</p>
                        <p>2 &ordm; andar</p>
                        <p>Centro</p> 
                        <p>(11) 2222222</p> 
                    </div>
                </div>
                <div className="d-flex">
                    <img src={LojaSp2} alt="loja 2 em São Paulo" />  
                    <div >
                        <h3>São Paulo</h3>                
                        <p>Av Paulista</p>
                        <p>10 &ordm; andar</p>
                        <p>Centro</p> 
                        <p>(11) 2222222</p> 
                    </div>
                </div>
            </div>
        </section>

    )
}