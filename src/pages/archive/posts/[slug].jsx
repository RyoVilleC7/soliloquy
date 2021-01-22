import styles from '../../../styles/modules/layout.module.scss';
import archiveStyles from '../../../styles/modules/archive.module.scss';
import BreadCrumb from '../../../components/parts/breadcrumb'
import PageTitle from '../../../components/parts/pageTitle';
import ArticleMeta from '../../../components/basic/articleMeta';
import Button from '../../../components/parts/button';
import AuthorBox from '../../../components/parts/authorBox';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostStyles from '../../../styles/modules/post.module.scss'
import Prism from 'prismjs'
import { API_URL, CONTENT_API_KEY } from '../../../functions/api';

export async function getStaticPaths() {
  const response = await fetch(
    //'https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags&limit=all'
    `${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=tags&limit=all`
  )
  const postList = await response.json();
  const posts = postList.posts;
  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.id,
          slug: post.slug
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  // fetch single post detail
  const response = await fetch(
    //`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/slug/${params.slug}/?key=7d660b12a28e4caff2f7ebe8dc&include=tags`
    `${API_URL}ghost/api/v3/content/posts/slug/${params.slug}/?key=${CONTENT_API_KEY}&include=tags`
  )
  const post = await response.json();
  return {
    props: post
  }
}

export default function Post(props) {

  const post = props.posts[0];
  const postData = {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    date: post.published_at,
    tag: post.tags[0].name,
    thumbnail: post.feature_image,
    text: post.html
  }
  const postDate = postData.date ? postData.date.substring(0,postData.date.indexOf("T")) : "Date";

  //redux
  const screenMode = useSelector(state => state.screenMode)

  //prism.js
  useEffect(() => {
      Prism.highlightAll();
  },[]);
  
  //pages
  return (
    <>
    <ArticleMeta title={postData.title} excerpt={postData.excerpt} slug={postData.slug} thumbnail={postData.thumbnail}/>
    <BreadCrumb title={postData.title} />
    <PageTitle pageTitle={"POST"} Styles={styles} />

    <article className={PostStyles.article}>
      <header>
      <h1>{postData.title}</h1>
      <div className={archiveStyles.postStatus}>
        <span className={archiveStyles.postDate}>{postDate}</span>
        <div className={archiveStyles.separator}></div>
        <span className={archiveStyles.postTags}>{postData.tag}</span>
      </div>
      {postData.thumbnail ? <img src={postData.thumbnail} /> :
      <img src="/images/default-image.jpg" alt="default-image" />}
      </header>
      <main dangerouslySetInnerHTML={{__html: postData.text}}></main>
    </article>

    <div className={styles.pageNationWrapper}>
      <Button text="記事一覧へ戻る" link="/" />
    </div>

      <div className={styles.authorBoxWrapper}>
        <AuthorBox />
      </div>

    </>
  )
}
