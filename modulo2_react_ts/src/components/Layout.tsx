import Footer from "./Footer";
import Header from "./Header/Header";

export default function Layout({ children }: any) {
  return (<>
  
    <Header />
    { children }
    <Footer />
  
  </>)
}