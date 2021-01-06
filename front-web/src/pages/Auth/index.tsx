import React from 'react';
import './styles.scss';
import { ReactComponent as AuthImage } from 'core/assets/images/auth.svg';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Recover from './components/Recover';
import Register from './components/Register';

const Auth = () => (

    <div className="auth-container">

        <div className="auth-info">

            <h1 className="auth-info-title">
                Divulgue seus produtos <br/> no DS Catalog
            </h1>
            
            <p className="auth-info-subtitle">
                Faça parte do nosso catálogo de divulgação e <br/> aumente a venda dos seus produtos.
            </p>

            <AuthImage />

        </div>

        <div className="auth-content">

            <Switch>
                    
                <Route path="/auth/login" >
                    <Login />
                </Route>
                
                <Route path="/auth/register"> 
                    <Register />
                </Route>

                <Route path="/auth/recover"> 
                    <Recover />
                </Route>

            </Switch>

        </div>

    </div>

);

export default Auth;

