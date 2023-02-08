import { Alert, Button, Form, Input, Spin } from "antd";
import { IAlertState, antIcon } from "./register";
import { isLoggedIn, login, saveUser } from "@/services/auth.services";
import { useEffect, useState } from "react";

import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Router from "next/router";
import styles from "@/styles/Register.module.css";

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 32 },
};

const tailFormItemLayout = {
  wrapperCol: {
    span: 24,
    offset: 0,
  },
};

const Login = () => {
  const [alert, setAlert] = useState<IAlertState>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const user = isLoggedIn();
    if (user) {
      Router.push("/");
    }
  }, []);

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const res = await login(values);
      saveUser(res.data.user);

      setAlert((prev) => ({
        ...prev,
        msg: `${res.message}...redirecting`,
        type: "success",
      }));

      setTimeout(() => {
        setIsLoading(false);
        Router.push("/");
      }, 2000);
    } catch (error: any) {
      setIsLoading(false);
      setAlert((prev) => ({
        ...prev,
        msg: error.response.data.message,
        type: "error",
      }));
    }
  };

  return (
    <PageLayout user={null}>
      <div className={styles.Register}>
        <div className={styles.Container}>
          <h1 style={{ alignSelf: "center", marginBottom: "20px" }}>Login</h1>
          <Form
            {...formItemLayout}
            form={form}
            name="login"
            className={styles.Form}
            onFinish={onFinish}
            requiredMark="optional"
            layout="vertical"
          >
            <Form.Item
              name="email"
              label="E-mail"
              labelAlign="left"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              labelAlign="left"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            {alert && <Alert message={alert.msg} type={alert.type} showIcon />}
            <Form.Item {...tailFormItemLayout} style={{ textAlign: "center" }}>
              <Button
                disabled={isLoading}
                type="primary"
                htmlType="submit"
                className={styles.Btn}
              >
                {isLoading ? <Spin indicator={antIcon} /> : "Login"}
              </Button>
              Not a member <Link href="/register">Register!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
