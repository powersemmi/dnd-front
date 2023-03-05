import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: layoutProps): any => (
  <>
    <Header></Header>
    {children}
    <Footer></Footer>
  </>
);

export default Layout;
