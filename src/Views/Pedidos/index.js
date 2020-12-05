import TabelaPedidos from '../../Components/Pedidos/TabelaPedido';
import FormPedidos from '../../Components/Pedidos/FormPedidos';
import '../../css/style.css';

export default function ViewPedidos() {


    return (

        <section className=" container d-flex justify-content-between">
        
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 row">
                    <TabelaPedidos />
                    <FormPedidos />
                </div>

           
        </section>
        

    );
}