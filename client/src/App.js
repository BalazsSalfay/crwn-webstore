import React, { useEffect } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { GlobalStyle } from './global.styles';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
              )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToprops = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToprops)(App);
