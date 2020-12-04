import '../../css/style.css';


export default function Categorias () {
    function ExibirCategoria(categoria){
        let elementos = document.getElementsByClassName('boxProdutos');
        for(var i=0; i<elementos.length; i++){
            if(categoria === elementos[i].id)
                elementos[i].style = 'display:inline-block';
            else
                elementos[i].style = 'display:none';
        }
    }
    
    let ExibirTodos = () => {
        let elementos = document.getElementsByClassName('boxProdutos');
        for(var i=0; i<elementos.length;i++){
            elementos[i].style = 'display:inline-block';
        }
    }
    return (
            <div className="row flex-column" style={{width: "203px"}}> 
                <h1 className="" >Produtos</h1>
                <aside>
                    <h5>CATEGORIAS</h5>
                    <hr className="w-75" />
                    <ul className="list-group ulCateg">
                        <li onClick={ExibirTodos} className="list-group-item  ">Todos (12)</li>
                        <li onClick={() => ExibirCategoria('Relogios')} className="list-group-item ">Relogios (3)</li>
                        <li onClick={() => ExibirCategoria('Tvs')} className="list-group-item ">Tvs (3)</li>
                        <li onClick={() => ExibirCategoria('Smartphones')} className="list-group-item ">Smartphones (3)</li>
                        <li onClick={() => ExibirCategoria('Notebooks')} className="list-group-item ">Notebooks (3)</li>
                    </ul>
                </aside>
            </div>
        )
}