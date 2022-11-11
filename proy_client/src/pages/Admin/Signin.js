import React from "react";
import {Layout, Tabs} from "antd";
import Login from "../../components/MenuComponents/Login";
import Register from "../../components/MenuComponents/Register";

export default function Signin(){
    const { Content} = Layout;
    const { TabPane } = Tabs;
    return (
        <Layout>
            <Content>
               <Tabs type="card">
                  <TabPane tab={<span> Iniciar sesión</span>} key="1">
                    <Login/>
                  </TabPane>
                  <TabPane tab={<span> Registro</span>} key="2">
                    <Register/>
                  </TabPane>
               </Tabs>
            </Content>
        </Layout>
    );
}