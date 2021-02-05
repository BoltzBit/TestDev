import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import {
  Row,
  Col
} from 'antd';

import api from '../services/api';

const EditarCliente = () => {
    const { id } = useParams();
	const history = useHistory(); 
    const [ cliente, setCliente ] = useState({});
    const [ tipoPessoa, setTipoPessoa ] = useState([]);
	
	const [ nome, setNome ] = useState('');
	const [ tipopessoa, setPessoa ] = useState('');
	const [ cpf_cnpj, setCpfCnpj ] = useState('');
	const [ cep, setCep ] = useState('');
	const [ endereco, setEndereco ] = useState('');
	const [ nro_logradouro, setNroLogradouro ] = useState('');
	const [ bairro, setBairro ] = useState('');
	const [ cidade, setCidade ] = useState('');
	const [ uf, setUf ] = useState('');
	
	
	
  
    useEffect(() => {
		async function fecthTipoPessoa(){
			const response = await api.get('pessoa');
			
			setTipoPessoa(response.data);
		}
		
		fecthTipoPessoa();
    },[]);
	console.log(tipoPessoa);
    
    useEffect(() => {
		
		async function fecthCliente(){
			const response = await api.get(`clientes/${id}`);
			
			setCliente(response.data);
		}
		
		fecthCliente();
		
    },[id]);

    async function handleSubmit(event) {
      event.preventDefault();
	  
	  const values = new FormData();
	  
	  values.append("nome", nome);
	  values.append("pessoa", tipopessoa);
	  values.append("cpf_cnpj", cpf_cnpj);
	  values.append("cep", cep);
	  values.append("endereco", endereco);
	  values.append("nro_logradouro", nro_logradouro);
	  values.append("bairro", bairro);
	  values.append("cidade", cidade);
	  values.append("bairro", bairro);
	  values.append("uf", uf);
  
      await api.put(`clientes/${id}`, values);
  
      alert('Cadastro Realizado com sucesso!');

      history.push('/clientes');
  
    }
	
    return (
      <>
        <form onSubmit={handleSubmit}>
			<Row>
				<Col span={18} offset={9}>
					<div>
						<label htmlFor="nome">Nome:</label>
						<input
							id='nome'
							value={cliente.nome}
							onChange={(e) => setNome(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="tipopessoa">Tipo Pessoa:</label>
						<select
							defaultValue={cliente.tipopessoa}
							onChange={(e) => setPessoa(e.target.value)}
						>
							{tipoPessoa.map(({ id, descricao }) => 
								<option
								  key={id}
								  value={id}
								>
									{descricao}
								</option>
							)}
						</select>
					</div>
					
					<div>
						<label htmlFor="cpf_cnpj">CPF/CNPJ:</label>
						<input 
							value={cliente.cpf_cnpj}
							onChange={(e) => setCpfCnpj(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="cep">CEP:</label>
						<input 
							value={cliente.cep}
							onChange={(e) => setCep(e.target.value)}
						/>
					</div>
					
					<div>
						<label htmlFor="endereco">Endereço:</label>
						<input 
							value={cliente.endereco}
							onChange={(e) => setEndereco(e.target.value)}
						/>
					</div>
					
					<div>
						<label htmlFor="nro_logradouro">Número:</label>
						<input 
							value={cliente.nro_logradouro}
							onChange={(e) => setNroLogradouro(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="bairro">Bairro:</label>
						<input 
							value={cliente.bairro}
							onChange={(e) => setBairro(e.target.value)}
						/>
					</div>
					
					<div>
						<label htmlFor="cidade">Cidade:</label>
						<input 
							value={cliente.cidade}
							onChange={(e) => setCidade(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="uf">UF:</label>
						<input 
							value={cliente.uf}
							onChange={(e) => setUf(e.target.value)}
						/>
					</div>
					
					<div>
						<button type="submit">
							Enviar
						</button>
					</div>
				</Col>
			</Row>
		</form>
      </>
    );
  };

export default EditarCliente;
