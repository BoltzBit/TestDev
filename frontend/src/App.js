import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Select
} from 'antd';

import api from './services/api';

const Cadastro = () => {
  const [ form ] = Form.useForm();
  const [componentSize, setComponentSize] = useState('default');
  const [ tipoPessoa, setTipoPessoa ] = useState([]);

  useEffect(() => {
    api.get('pessoa')
    .then(response => {
      console.log(response.data)
      setTipoPessoa(response.data);
    });
  },[]);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >

        <Form.Item label="Nome" name="nome">
          <Input />
        </Form.Item>
        <Form.Item label="Tipo Pessoa" name="tipopessoa">
          <Select>
            {tipoPessoa.map(({ id, descricao }) => 
              <Select.Option
                key={id}
                value={id}
              >
                {descricao}
              </Select.Option>
            )}
          </Select>
        </Form.Item>
        <Form.Item label="CPF/CNPJ" name="cpf_cnpj">
          <Input />
        </Form.Item>
        <Form.Item label="CEP" name="cep">
          <Input />
        </Form.Item>
        <Form.Item label="Endereço" name="endereco">
          <Input />
        </Form.Item>
        <Form.Item label="Número" name="numero">
          <Input />
        </Form.Item>
        <Form.Item label="Bairro" name="bairro">
          <Input />
        </Form.Item>
        <Form.Item label="Cidade" name="cidade">
          <Input />
        </Form.Item>
        <Form.Item label="UF" name="uf">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};



const App = () => {
  return  <Cadastro/>;
};

export default App;
