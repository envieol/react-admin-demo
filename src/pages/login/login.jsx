import React, {useState, useEffect} from "react";
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import "./login.less"
import logo from "./imgs/logo.svg"

const Login = () => {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };


    const handleFrom = async ()=>{
        try {
            const values = await form.validateFields();
            //TODO send valuse to back end
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    }

    const pwValidator = (rule,value)=>{
        console.log(rule)
        if (value === 'pw') {
            return Promise.resolve();
        }
        return Promise.reject('Password must be "pw"');
    }

    return (
        <div className={"login"}>
            <header className={"login-header"}>
                <img src={logo} alt={"logo"}/>
                <h1>Login</h1>
            </header>
            <section className={"login-content"}>
                <h2>Sign In</h2>
                <Form form={form}
                      className={"login-form"}
                      name={"loginForm"}
                      onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' },{validator:pwValidator}]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                               placeholder="Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={"login-form-button"}> Login </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type={"ghost"} className={"login-form-handle"} onClick={handleFrom}>handle</Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}

export default  Login