import React from 'react'
import {Switch,Route} from 'react-router-dom';

import {home, category, product, trend, user} from 'src/pages';
import {productContainer,categoryContainer} from 'src/container/pages'




const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={home}/>
      <Route path="/shop/:gender/:category" exact component={categoryContainer}/>
      <Route path="/shop/:gender/:category/:productId" exact component={productContainer}/>
      <Route path="/tendances" exact component={trend}/>
      <Route path="/profil" exact component={user}/>
    </Switch>
  )
}

export default Routes




