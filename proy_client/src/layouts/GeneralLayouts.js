import React,{ useState} from "react";
import {Button, Layout} from "antd";
import { GithubOutlined } from "@ant-design/icons";
import MenuSider from "../components/MenuComponents/Menusider/MenuSider";
import MenuTop from "../components/MenuComponents/MenuTop";


import "./GeneralLayout.scss";

export default function GeneralLayout(props){
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer} = Layout;
    const {children} = props;
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout style={{ marginLeft: menuCollapsed ? "80 px" : "200px"}}>
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