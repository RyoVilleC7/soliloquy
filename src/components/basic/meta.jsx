import Head from 'next/head';

const Meta = () => {
  
    //component
    return (
        <Head>
            <title>Soliloquy</title>
            <meta name="description" content="とあるWebエンジニアの生活雑貨＆ガジェット＆技術ブログ" />
            <meta property="og:title" content="Soliloquy" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="ページの URL" />
            <meta property="og:image" content="サムネイル画像の URL" />
            <meta property="og:site_name" content="サイト名" />
            <meta property="og:description" content="ページのディスクリプション" />
        </Head>
    )
}

export default Meta;