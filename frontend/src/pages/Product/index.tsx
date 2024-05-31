import React, { useCallback, useState } from 'react';
import './styles.css';
import api from '../../services/api';

const Product: React.FC = () => {

    const [nome_product, setNome_Product] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = useCallback(async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const response = await api.post('/products', {
            nome_product, descricao
        });
        console.log(response.data);
    }, [nome_product, descricao])

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor=''>Nome</label>
                <input type='text' onChange={event => setNome_Product(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor=''>Descrição</label>
                <input type='text' onChange={event => setDescricao(event?.target.value)}/>
            </div>
            <div className='form-group'>
                <button type='submit'>Cadastrar</button>
            </div>
        </form>
    );
};

export default Product;