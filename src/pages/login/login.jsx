import React, {useState, useEffect} from "react";
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import "./login.less"
import logo from "./imgs/logo.svg"

const Login = () => {
    return (
        <div className={"login"}>
            <header className={"login-header"}>
                <img src={logo} alt={"logo"}/>
                <h1>login</h1>
            </header>
            <section className={"login-content"}>
                <h2>用户登录</h2>
                <Form className={"login-form"}>
                    <Form.Item>
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                               placeholder="Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={"login-form-button"}> Log in </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}

export default Login