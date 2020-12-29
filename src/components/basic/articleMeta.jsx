import Head from 'next/head';

const ArticleMeta = (props) => {
  
    //component
    return (
        <Head>
            <title>{props.title ? `${props.title} | Soliloquy` : "Soliloquy"}</title>
            <meta name="description" content={props.excerpt ? props.excerpt : "This site name is Soliloquy."} />
            <meta property="og:title" content={props.title ? props.title : "Soliloquy"} />
            <meta property="og:type" content={props.title ? "article" : "website"} />
            <meta property="og:url" content={`https://soliloquy.vercel.app/archive/posts/${props.slug}`} />
            <meta property="og:image" content={props.thumbnail} />
            <meta property="og:site_name" content={props.title} />
            <meta property="og:description" content={props.excerpt} />
        </Head>
    )
}

export default ArticleMeta;