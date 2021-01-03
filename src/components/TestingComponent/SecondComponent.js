import React, { Component } from 'react';
import "antd/dist/antd.css";

import { Layout, Menu, Breadcrumb } from "antd"
const { Header, Content, Sider,Footer } = Layout;

class SecondComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Layout className="layout">
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>,
            </>
         );
    }
}
 
export default SecondComponent;