import React, { useEffect, useState } from 'react';
import {
    Table,
    Space
} from 'antd'

import api from '../services/api';

const Clientes = () => {
    const [ data, setData ] = useState([]);

    async function deleteClient(id){

        await api.delete(`clientes/${id}`);

        alert('Cliente deletado com sucesso!');

        window.location.reload();
    }

    const colums = [
        { title: 'Nome', dataIndex: 'nome', key: 'nome'},
        { title: 'CPF/CNPJ', dataIndex:'cpf_cnpj', key: 'cpf_cnpj'},
        { title: 'Cep', dataIndex: 'cep', key: 'cep'},
        { title: 'Endereco', dataIndex: 'endereco', key: 'endereco'},
        { title: 'Número', dataIndex: 'nro_logradouro', key: 'nro_logradouro'},
        { title: 'Cidade', dataIndex: 'cidade', key: 'cidade'},
        { title: 'Bairoo', dataIndex: 'bairro', key: 'bairro'},
        { title: 'UF', dataIndex: 'uf', key: 'uf'},
        { title: 'Ações', key: 'action', render: (text, record) => (
            <Space size="middle">
                <a href={`/clientes/${record.id}`}>Editar</a>
                <button onClick={() => deleteClient(record.id)}>Deletar</button>
            </Space>
        )},
    ];

    useEffect(() => {
        api.get('clientes').then(response => setData(response.data));
    }, []);
    console.log(data);

    return(
        <Table columns={colums} dataSource={data}/>
    );
}

export default Clientes;
