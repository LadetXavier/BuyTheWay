import React from 'react'
import {Switch,Route} from 'react-router-dom';

import {home, category, product, trend, user} from 'src/pages';
import {productContainer} from 'src/container/pages/product.js'




const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={home}/>
      <Route path="/:gender/:category" exact component={category}/>
      <Route path="/:gender/:category/:productId" exact component={productContainer}/>
      <Route path="/tendances" exact component={trend}/>
      <Route path="/profil" exact component={user}/>
    </Switch>
  )
}

export default Routes




