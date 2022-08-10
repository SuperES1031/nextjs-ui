import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <title>Pretzel</title>
        <script type="text/javascript" src="https://www.bugherd.com/sidebarv2.js?apikey=xgtu0jhxgpxumj1ksbpsya" async={true}></script>
        <link rel='shortcut icon' type='image/x-icon' href='./src/../favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}