import Head from 'next/head';

const Meta = () => {
  
    //component
    return (
        <Head>
            <title>Soliloquy</title>
            <link rel="icon" href="/images/favicon.ico" />
            <link rel="apple-touch-icon" href="/images/apple-touch-icon-192×192.png" />
            <meta name="description" content="とあるWebエンジニアの趣味ブログ" />
            <meta property="og:title" content="Soliloquy" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="ページの URL" />
            <meta property="og:image" content="https://soliloquy.vercel.app/images/default-image.jpg" />
            <meta property="og:site_name" content="サイト名" />
            <meta property="og:description" content="ページのディスクリプション" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ryotaro_WAVES" />
        </Head>
    )
}

export default Meta;