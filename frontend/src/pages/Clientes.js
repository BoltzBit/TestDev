import React, { useEffect, useState } from 'react';
import {
    Table,
    Space
} from 'antd'

import api from '../services/api';

const Clientes = () => {
    const [ data, setData ] = useState([]);
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
                <a href = {`/clientes/${record.id}`}>Deletar</a>
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
