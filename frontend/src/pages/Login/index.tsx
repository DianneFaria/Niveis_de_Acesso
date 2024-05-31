import React, { useCallback, useState } from  'react';
import './styles.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate  } from 'react-router-dom';

const Login: React.FC = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const { signIn } = useAuth();

    const handleSubmit = useCallback( async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

         await signIn({ login, senha });
         navigate('/dashboard');

    }, [login, senha]);

    const cadastroSubmit = () => {
        navigate('/users');
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor=''>Usuário </label>
                <input type='text' onChange={event => setLogin(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label htmlFor=''>Senha </label>
                <input type='password' onChange={event => setSenha(event.target.value)}/>
            </div>

            <div className='form-group'>
                <button type='submit'> Entrar </button>
            </div>
            <div className='form-group'>
                <button type='button' onClick={cadastroSubmit}> Cadastrar </button>
            </div>
        </form>
    )
};

export default Login;