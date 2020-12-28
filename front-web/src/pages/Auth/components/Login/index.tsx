import ButtonIcon from 'core/components/ButtonIcon';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthCard from '../Card';
import './styles.scss';
import { makeLogin } from 'core/utils/request';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit } = useForm<FormData>();

    const [hasError, setHasError] = useState(false);

    const onSubmit = (data: FormData) => {
        makeLogin(data)
            .then(response => {
                setHasError(false);
            })
            .catch( () => {
                setHasError(true);
            })
    }

    return (

        <AuthCard title="login" >
            
            {hasError && (

                <div className="alert alert-danger">

                    Usuário ou senha inválidos!

                </div>

            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">

                <input 
                    type="email"
                    ref={register({
                        required: true
                    })}
                    name="username" 
                    className="form-control input-base margin-botton-30" 
                    placeholder="Email"
                />

                <input 
                    type="password" 
                    ref={register({
                        required: true
                    })}
                    name="password"
                    className="form-control input-base" 
                    placeholder="Senha"
                />

                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueci a senha?
                </Link>

                <div className="login-submit" >
                    <ButtonIcon text="Logar" />
                </div>

                <div className="text-center">
        
                    <span className="not-registered">
                        Não tem Cadastro?
                    </span>
        
                    <Link to="/admin/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>

                </div>

            </form>                        

        </AuthCard>

    );

};

export default Login;