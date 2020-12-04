import { Switch, Route } from 'react-router-dom';

import ViewHome from './Views/Home';
import ViewContatos from './Views/Contatos';
import ViewLojas from './Views/Lojas';
import ViewProdutos from './Views/Produtos';
import ViewPedidos from './Views/Pedidos';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ViewHome} />
            <Route exact path="/produtos" component={ViewProdutos} />
            <Route exact path="/contatos" component={ViewContatos} />
            <Route exact path="/lojas" component={ViewLojas} />
            <Route exact path="/Pedidos" component={ViewPedidos} />
        </Switch>
    );
}

export default Routes;