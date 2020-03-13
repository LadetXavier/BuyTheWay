import React from 'react'
import {Switch,Route} from 'react-router-dom';

import {Home, Trend, Page404} from 'src/pages';
import {productContainer,categoryContainer, cartContainer,UserContainer} from 'src/container/pages'




const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/shop/:gender/:category" exact component={categoryContainer}/>
      <Route path="/shop/:gender/:category/:productId" exact component={productContainer}/>
      <Route path="/tendances" exact component={Trend}/>
      <Route path="/profil" exact component={UserContainer}/>
      {/* <Route path="/signup" exact component={SignUpContainer}/> */}
      <Route path="/panier" exact component={cartContainer}/>
      <Route path="*" component={Page404} />
    </Switch>
  )
}
export default Routes




