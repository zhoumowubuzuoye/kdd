/*
 * @Author: xiewenhao
 * @Date: 2023-04-06 13:43:25
 * @LastEditTime: 2023-04-06 14:50:05
 * @Description:
 */
import React from "react";
import { Outlet } from "react-router-dom";

import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export default function AdminView() {
  return (
    <div className="loginBox">
      <h2><span className="primary">快团团</span>登录</h2>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="密码:" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      <Outlet></Outlet>
    </div>
  );
}
