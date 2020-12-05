import TabelaPedidos from '../../Components/Pedidos/TabelaPedido';
import FormPedidos from '../../Components/Pedidos/FormPedidos';
import React from 'react';
import '../../css/style.css';

export default function ViewPedidos() {


    return (

        <section className=" d-flex justify-content-between">
        
                <div className="row">
                    <FormPedidos />
                    <TabelaPedidos />
                </div>

           
        </section>
        

    );
}