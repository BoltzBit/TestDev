import React from 'react';
import 'antd/dist/antd.css';
import Routes from './routes';

import {
  Layout
} from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
  return  (
    <Layout>
      <Header>
        <div style={{color:'red'}}>TestDev</div>
      </Header>

      <Content style={{ padding: '0 50px'}}>
        <div>
          <Routes />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center '}}>TestDev @2019 Created by Mateus</Footer>
    </Layout>
  );
};

export default App;
