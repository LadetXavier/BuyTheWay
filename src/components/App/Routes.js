import React from 'react'
import {Switch,Route} from 'react-router-dom';

import {Home, Trend, User} from 'src/pages';
import {productContainer,categoryContainer, cartContainer} from 'src/container/pages'




const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/shop/:gender/:category" exact component={categoryContainer}/>
      <Route path="/shop/:gender/:category/:productId" exact component={productContainer}/>
      <Route path="/tendances" exact component={Trend}/>
      <Route path="/profil" exact component={User}/>
      <Route path="/panier" exact component={cartContainer}/>
    </Switch>
  )
}
export default Routes




