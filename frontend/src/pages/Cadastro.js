import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col
} from 'antd';

import api from '../services/api';

const Cadastro = () => {
    const history = useHistory(); 
    const [ form ] = Form.useForm();
    const [componentSize, setComponentSize] = useState('default');
    const [ tipoPessoa, setTipoPessoa ] = useState([]);
  
    useEffect(() => {
		async function fecthTipoPessoa(){
			const response = await api.get('pessoa');
			
			setTipoPessoa(response.data);
		}
		
		fecthTipoPessoa();
    },[]);
  
    async function finishForm(values) {
      console.log(values)
  
      await api.post('clientes',values);
  
      alert('Cadastro Realizado com sucesso!');

      history.push('/clientes');
  
    }
  
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
            span: 10,
          }}
          layout="vertical"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          onFinish={finishForm}
        >
        <Row>
            <Col span={18} offset={9}>
          <Form.Item label="Nome" name="nome" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Tipo Pessoa" name="tipopessoa" rules={[{ required: true }]}>
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
          <Form.Item label="CPF/CNPJ" name="cpf_cnpj" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="CEP" name="cep" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Endereço" name="endereco" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Número" name="nro_logradouro" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Bairro" name="bairro" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Cidade" name="cidade" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="UF" name="uf" rules={[{ required: true }]}>
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
          </Col>
        </Row>
        </Form>
      </>
    );
  };

export default Cadastro;
