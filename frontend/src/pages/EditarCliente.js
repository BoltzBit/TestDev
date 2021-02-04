import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
    const { id } = useParams();
    const [ data, setData ] = useState([]);
    const history = useHistory(); 
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
    
    useEffect(() => {
        api.get(`clientes/${id}`)
            .then(response => {
                setData(response.data);
            });
            
    },[id]);

    async function finishForm(values) {
      console.log(values)
  
      await api.put(`clientes/${id}`,values);
  
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
          <Form.Item label="Nome" name="nome" rules={[{ required: true }]} defaultValue={`${data.nome}`}>
            <Input defaultValue={`${data.nome}`}/>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Editar
            </Button>
          </Form.Item>
          </Col>
        </Row>
        </Form>
      </>
    );
  };

export default Cadastro;
