import React,{ useState} from "react";
import {Routes, Route} from "react-router-dom";
import { Layout, Button } from "antd";
import MenuSider from "../components/MenuComponents/Menusider/MenuSider";
import MenuTop from "../components/MenuComponents/MenuTop";
import { GithubOutlined } from "@ant-design/icons";
import Signin from "../pages/Admin/Signin";
import "./LayoutAdmin.scss"


export default function LayoutAdmin(props){
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer} = Layout;
    const {children} = props;
    const user = null;

    if (!user) {
        return (
            <>
               <Signin />
               <Routes>
                   <Route path="/admin/login/*" element={<Signin />} />
               </Routes>
            </>
        );
    }
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80 px" : "200px"}}>
                <Header className="layout-admin__header">
                    <MenuTop
                    menuCollapsed={menuCollapsed}
                    setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
            <Content className="layout-admin__content">{children}</Content>
            <Footer className="layout-admin__footer">
                <Button type="link" onClick={() => console.log("Github")}>
                    <GithubOutlined style={{ fontSize: "17px"}} /> UM 2022
                </Button>
            </Footer>
        </Layout>
            </Layout>
    );  
}