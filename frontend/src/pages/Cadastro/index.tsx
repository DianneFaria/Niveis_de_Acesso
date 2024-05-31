import React, { useCallback, useState } from 'react';
import './styles.css';
import api from '../../services/api';

const Cadastro: React.FC = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [roles, setRoles] = useState('');

    const handleSubmit = useCallback(async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const response = await api.post('/users', {
            nome, cpf, login, senha, roles 
        });
        console.log(response.data);
    }, [nome, cpf, login, senha, roles])

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor=''>Nome</label>
                <input type='text' onChange={event => setNome(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor=''>CPF</label>
                <input type='text' onChange={event => setCpf(event?.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor=''>Login</label>
                <input type='text' onChange={event => setLogin(event?.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor=''>Senha</label>
                <input type='text' onChange={event => setSenha(event?.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor=''>Roles</label>
                <input type='text' onChange={event => setRoles(event?.target.value)}/>
            </div>
            <div className='form-group'>
                <button type='submit'>Cadastrar</button>
            </div>
        </form>
    );
};

export default Cadastro;