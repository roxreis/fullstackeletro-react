import React, { useState, useEffect } from 'react';
import '../../css/style.css';


const ListProd = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fectchData() {
            const url = await fetch("http://localhost/fseletro-react/Backend/api/produtos.php");
            setProducts(await url.json());
        }
        fectchData();
    }, [])

    // let Zoom = (imagem) => {
    //     if(imagem.target.style.width === '120px')
    //     imagem.target.style = 'width:240px'
    //     else
    //     imagem.target.style = 'width:120px'
    // }



    return (

        <>
     <section className="produtos-img">
            {
                products.map(prod => {
                    return (

                            <div className="boxProdutos" id={prod.categoria}> 
                                <img src={prod.imagem}  alt={prod.descricao}  />
                                <p><strong>{prod.descricao}</strong></p>
                                <hr />
                                <p>valor inicial <strike style={{ color: "red" }}> R$ {prod.preco}</strike></p>
                                <p>Valor c/ desconto<strong> R$ {prod.preco_c_desconto}</strong></p>
                            </div>

                        )
                    }
                ) }</section>
        </>
    )
}

export default ListProd;