import React from 'react'
import {Switch,Route} from 'react-router-dom';

import {Page404} from 'src/pages';
import { productContainer,categoryContainer, cartContainer, UserContainer, homeContainer, TrendContainer, ChallengeContainer } from 'src/container/pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={homeContainer}/>
      <Route path="/shop/:gender/:category" exact component={categoryContainer}/>
      <Route path="/shop/:gender/:category/:productId" exact component={productContainer}/>
      <Route path="/tendances" exact component={TrendContainer}/>
      <Route path="/profil" exact component={UserContainer}/>
      <Route path="/defi" exact component={ChallengeContainer}/>      
      <Route path="/panier" exact component={cartContainer}/>
      <Route path="*" component={Page404} />
    </Switch>
  )
}
export default Routes




