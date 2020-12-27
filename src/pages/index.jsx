import styles from '../styles/modules/layout.module.scss';
import archiveStyles from '../styles/modules/archive.module.scss';
import PageTitle from '../components/parts/pageTitle';
import PostCard from '../components/parts/postCard';
import PageNation from '../components/parts/pageNation';
import AuthorBox from '../components/parts/authorBox';
import "prismjs/themes/prism-tomorrow.css"

export const getStaticProps = async () => {
  const res = await fetch(`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags`)
  const posts = await res.json()
  const pagination = posts.meta.pagination;

    return {
      props: { posts,pagination }
    }
}

export default function Home(props) {

  const posts = props.posts.posts;
  
  //pages
  return (
    <>
      <div className={archiveStyles.archiveTopLogoWrapper}>
        <dl className={archiveStyles.archiveTopLogo}>
          <dt>
            Soliloquy
          </dt>
          <dd>
            とあるWebエンジニアの生活雑貨&ガジェット&技術ブログ
          </dd>
        </dl>
      </div>

      <PageTitle pageTitle={'Archive'} />

      <div className={archiveStyles.postWrapper} id="postWrapper">
        {posts.map((value, key) => {
          return <PostCard archiveStyles={archiveStyles} slug={"archive/posts/" + value.slug} title={value.title} date={value.published_at} tags={value.tags[0].name ? value.tags[0].name : "tags"} thumbnail={value.feature_image} key={key} />
        })}
      </div>

      <div className={styles.pageNationWrapper}>
        <PageNation data={props.pagination} />
      </div>

      <div className={styles.authorBoxWrapper}>
        <AuthorBox />
      </div>
    </>
  )
}
