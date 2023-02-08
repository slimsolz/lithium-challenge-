import { Layout } from "antd";
import Navbar from "./Navbar";
import styles from "@/styles/Home.module.css";

const { Content } = Layout;

interface IProps {
  user: string| null;
  children: React.ReactNode;
}
const PageLayout = ({ user, children }: IProps) => {
  return (
    <Layout className={styles.Home}>
      <Navbar user={user} />
      <Content
        style={{
          padding: "0",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default PageLayout;
