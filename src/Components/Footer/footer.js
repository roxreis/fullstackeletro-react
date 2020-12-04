import '../../css/style.css';
import ImgFooter from '../../img/formas-pgto.png';


export default function Footer() {
    return (
        <footer>
            <div className="formas-pgto">
                <h4 >Formas de pagamento </h4>
                <img src={ImgFooter} alt="formas de pagamento" />
            </div>
        </footer>
    )
}