import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id='page-content'>{children}</main>
      <Footer />
    </>
  )
}