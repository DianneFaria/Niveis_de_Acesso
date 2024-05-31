import React, { useEffect, useState } from "react";
import api from "../../services/api";
import PermissionComponent from "../../components/PermissionComponent";
import { useNavigate } from "react-router-dom";

interface ProductData {
    id: string;
    nome_product: string;
    descricao: string;
}

const List: React.FC = () => {
    const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);

    const navigate = useNavigate();

    useEffect(() => {
        api.get("products").then((response) => setProducts(response.data));
    }, []);
    return <div>

        <h3>Listagem de produtos</h3>

        <div>
            {products.map(product => (
                <div key={product.id}>
                    <span>ID: {product.id}</span>
                    <br />
                    <span>Nome: {product.nome_product}</span>
                    <br />
                    <span>Descrição: {product.descricao}</span>
                    <br />
                    <PermissionComponent role="Admin_Role">
                        <button onClick={() => navigate('/product')}>Cadastrar Produto</button>
                    </PermissionComponent>
                    <hr />
                </div>
            ))}
        </div>
    </div>
}


export default List;