import { Alert, Button, Form, Input, Spin } from "antd";
import { isLoggedIn, register } from "../services/auth.services";
import { useEffect, useState } from "react";

import Link from "next/link";
import { LoadingOutlined } from "@ant-design/icons";
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

export interface IAlertState {
  msg: string;
  type: "success" | "error" | "info" | "warning" | undefined;
}

export const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Register: React.FC = () => {
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
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    try {
      const res = await register(userData);
      setAlert((prev) => ({
        ...prev,
        msg: `${res.message}...redirecting to login`,
        type: "success",
      }));
      setTimeout(() => {
        setIsLoading(false);
        Router.push("/login");
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
          <h1 style={{ alignSelf: "center", marginBottom: "20px" }}>
            Register
          </h1>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            className={styles.Form}
            onFinish={onFinish}
            requiredMark="optional"
            layout="vertical"
          >
            <Form.Item
              name="firstName"
              label="First Name"
              labelAlign="left"
              rules={[
                {
                  required: true,
                  message: "Please input your first name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              labelAlign="left"
              rules={[
                {
                  required: true,
                  message: "Please input your last name",
                },
              ]}
            >
              <Input />
            </Form.Item>
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
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              labelAlign="left"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
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
                {isLoading ? <Spin indicator={antIcon} /> : "Register"}
              </Button>
              Already a member <Link href="/login">Login!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Register;
