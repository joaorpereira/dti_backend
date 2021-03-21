import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home/Home'
import CreateProduct from '../screens/CreateProduct/CreateProduct'
import UpdateProduct from '../screens/UpdateProduct/UpdateProduct'

export default function Routes() {
  return (
    <Switch>
      <Route exact path={['/', '/home']} component={Home} />
      <Route path={'/cadastrar'} component={CreateProduct} />
      <Route path={'/editar/:id'} component={UpdateProduct} />
    </Switch>
  )
}
