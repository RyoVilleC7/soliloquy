import styles from '../styles/modules/layout.module.scss';
import archiveStyles from '../styles/modules/archive.module.scss';
import PageTitle from '../components/parts/pageTitle';
import SortBtn from '../components/parts/sortBtn';
import PostCard from '../components/parts/postCard';
import PageNation from '../components/parts/pageNation';
import AuthorBox from '../components/parts/authorBox';
import Meta from '../components/basic/meta';
import "prismjs/themes/prism-tomorrow.css"
import { API_URL, CONTENT_API_KEY } from '../functions/api';

export const getStaticProps = async () => {
  //const res = await fetch(`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags`)
  const res = await fetch(`${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=tags`)
  const posts = await res.json()
  const pagination = posts.meta.pagination;

  // タグ一覧取得
  const tagsArray = [];
  const tagsData = await fetch(`${API_URL}ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}`);
  const tagsList = await tagsData.json();
  for (let i = 0; i < tagsList.tags.length; i++) {
    tagsArray.push(tagsList.tags[i].slug);
  }

    return {
      props: { posts, pagination, tagsArray }
    }
}

export default function Home(props) {

  const posts = props.posts.posts;
  
  //pages
  return (
    <>
    <Meta />
      <div className={archiveStyles.archiveTopLogoWrapper}>
        <dl className={archiveStyles.archiveTopLogo}>
          <dt>
            Soliloquy
          </dt>
          <dd>
            とあるWebエンジニアの趣味ブログ
          </dd>
        </dl>
      </div>

    <div className={archiveStyles.pageTitle_sort_wrapper_index}>
      <PageTitle pageTitle={'Archive'} left={true} />
      <SortBtn tags={props.tagsArray}/>
    </div>

      <div className={archiveStyles.postWrapper} id="postWrapper">
        {posts.map((value, key) => {
          return <PostCard archiveStyles={archiveStyles} slug={"archive/posts/" + value.slug} title={value.title} date={value.published_at} tags={value.tags[0].name ? value.tags[0].name : "tags"} thumbnail={value.feature_image} key={key} />
        })}
      </div>

      <div className={styles.pageNationWrapper}>
        <PageNation data={props.pagination} pageName={"archive"} />
      </div>

      <div className={styles.authorBoxWrapper}>
        <AuthorBox />
      </div>
    </>
  )
}
