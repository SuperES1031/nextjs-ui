import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth'>
      <Head>
        <script type="text/javascript" src="https://www.bugherd.com/sidebarv2.js?apikey=xgtu0jhxgpxumj1ksbpsya" async={true}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}