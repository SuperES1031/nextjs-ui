import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import Head from "next/head";

export default function Layout({ children, seo }) {
  return (
    <>
      <Head>{seo}</Head>
      <Header />
      <main id='page-content'>{children}</main>
      <Footer />
    </>
  )
}