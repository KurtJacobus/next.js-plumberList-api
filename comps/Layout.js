import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        ></link>
      </Head>
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;
