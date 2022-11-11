import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined} from "@ant-design/icons";
import "./MenuSider.scss";

export const MenuSider = (props) => {
    const { Sider } = Layout;
    const location = useLocation;
    const navigate = useNavigate;
    const menuItems = [
        {
            key: "/admin",
            icon: <HomeOutlined />,
            label: <span className="nav-text">Home</span>,
        },
        {
            key: "/admin/contact",
            icon: <UserOutlined />,
            label: <span className="nav-text">Contact</span>,
        },
    ];
    const menuClick = (e) =>{
        const path = e.key;
        navigate(path);
    };
    return (
        <Sider className="admin-sider" collapsed={props.menuCollapsed}>
            <Menu
            theme="aliceblue"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            onClick={menuClick}
            items={menuItems}
            />
        </Sider>
    );    
};

export default MenuSider;