import styles from '../../styles/modules/layout.module.scss';
import archiveStyles from '../../styles/modules/archive.module.scss';
import PageTitle from '../../components/parts/pageTitle';
import PostCard from '../../components/parts/postCard';
import PageNation from '../../components/parts/pageNation';
import AuthorBox from '../../components/parts/authorBox';

export async function getStaticPaths() {

  const pageArray = [];
  const getPostsLimit = 15;
  const res = await fetch(`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags&limit=all`);
  const posts = await res.json();
  const pagination = await posts.meta.pagination;
  const allPostLength = Math.ceil(Number(posts.posts.length) / getPostsLimit);

  for (let i = 0; i < allPostLength; i++) {
    const res = await fetch(`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags&page=${i}`);
    const posts = await res.json();
    pageArray.push(posts);
  }

  return {
    paths: pageArray.map((post, index) => {
      const str = index + 1;
      const posts = post.posts[index];
      return {
        params: {
          page: str.toString()
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags&page=${params.page}`);
  const data = await res.json();
  const posts = data.posts;
  const pagination = data.meta.pagination;
    return {
      props: {
        page: params.page,
        posts: posts,
        pagination: pagination
      }
    }
}

export default function Homes(props) {
  
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
        {props.posts.map((value, key) => {
          return <PostCard archiveStyles={archiveStyles} slug={value.slug} title={value.title} date={value.published_at} tags={value.tags[0].name ? value.tags[0].name : "tags"} thumbnail={value.feature_image} key={key} />
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
