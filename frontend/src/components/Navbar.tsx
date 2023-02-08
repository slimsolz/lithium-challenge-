import Image from "next/image";
import { Layout } from "antd";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { logOut } from "@/services/auth.services";
import styles from "@/styles/Header.module.css";

const { Header } = Layout;

const Navbar = ({ user }: { user: string | null }) => {
  return (
    <Header className={styles.Header}>
      <Image src={Logo} alt="logo" height="39" />
      {user && (
        <Link onClick={() => logOut()} href="/login">
          Logout
        </Link>
      )}
    </Header>
  );
};

export default Navbar;
