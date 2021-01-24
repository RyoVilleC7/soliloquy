import styles from '../../styles/modules/layout.module.scss';
import archiveStyles from '../../styles/modules/archive.module.scss';
import PageTitle from '../../components/parts/pageTitle';
import SortBtn from '../../components/parts/sortBtn';
import PostCard from '../../components/parts/postCard';
import PageNation from '../../components/parts/pageNation';
import AuthorBox from '../../components/parts/authorBox';
import Meta from '../../components/basic/meta';
import { API_URL, CONTENT_API_KEY } from '../../functions/api';

export async function getStaticPaths() {

  const pageArray = [];
  const getPostsLimit = 15;
  const res = await fetch(`${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=tags&limit=all`)
  const posts = await res.json();
  const allPostLength = Math.ceil(Number(posts.posts.length) / getPostsLimit);

  for (let i = 0; i < allPostLength; i++) {
    const res = await fetch(`${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=tags&page=${i}`)
    const posts = await res.json();
    pageArray.push(posts);
  }

  return {
    paths: pageArray.map((post, index) => {
      const str = index + 1;
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
  
  // ポスト取得
  const res = await fetch(`${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=tags&page=${params.page}`)
  const data = await res.json();
  const posts = data.posts;
  const pagination = data.meta.pagination;

  // タグ一覧取得
  const tagsArray = [];
  const tagsData = await fetch(`${API_URL}ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}`);
  const tagsList = await tagsData.json();
  for (let i = 0; i < tagsList.tags.length; i++) {
    tagsArray.push(tagsList.tags[i].slug);
  }

    return {
      props: {
        page: params.page,
        posts: posts,
        pagination: pagination,
        tagsArray
      }
    }
}

export default function Homes(props) {
  
  //pages
  return (
    <>
      <Meta />

<div className={archiveStyles.pageTitle_sort_wrapper}>
  <PageTitle pageTitle={'Archive'} left={true} />
  <SortBtn tags={props.tagsArray}/>
</div>

      <div className={archiveStyles.postWrapper} id="postWrapper">
        {props.posts.map((value, key) => {
          return <PostCard archiveStyles={archiveStyles} slug={"posts/" + value.slug} title={value.title} date={value.published_at} tags={value.tags[0].name ? value.tags[0].name : "tags"} thumbnail={value.feature_image} key={key} />
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
