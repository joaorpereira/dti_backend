import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home/Home'
// import Editar from '../screens/Editar/Editar'

export default function Routes() {
  return (
    <Switch>
      <Route exact path={['/', '/home']} component={Home} />
      {/* <Route path={'/editar'} component={Editar} /> */}
    </Switch>
  )
}