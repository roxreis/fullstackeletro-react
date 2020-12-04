import Categorias from '../../Components/Categorias/Categorias';
import Produtos from '../../Components/Produtos/Produto';
import '../../css/style.css';


export default function ViewProdutos() {

    return (

            <section class="section-produtos">  
                <Categorias />
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <Produtos />
                </div>
            </section>

    );
}