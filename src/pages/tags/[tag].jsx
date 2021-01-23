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

  // タグ一覧取得
  const tagsArray = [];
  const tagsData = await fetch(`${API_URL}ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}`);
  const tagsList = await tagsData.json();
  for (let i = 0; i < tagsList.tags.length; i++) {
    tagsArray.push(tagsList.tags[i].slug);
  }

  // タグ毎の一覧ページパス出力
  const pageArray = [];
  const getPostsLimit = 15;

  // 15記事を一単位としたぺージ数を算出
  for (let i = 0; i < tagsArray.length; i++) {
    const categoryArray = [];
    const res = await fetch(`${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&filter=tag:${tagsArray[i]}&limit=all`)
    const posts = await res.json();
    const allPostLength = Math.ceil(Number(posts.posts.length) / getPostsLimit);
  
    for (let _i = 0; _i < allPostLength; _i++) {
      const res = await fetch(`${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&filter=tag:${tagsArray[i]}&page=${_i + 1}`)
      const posts = await res.json();
      categoryArray.push(posts)
    }

    pageArray.push(categoryArray);
  }

  const paramsArray = [];

  for (let i = 0; i < pageArray.length; i++) {
    let tagName = tagsArray[i];
      pageArray[i].map((posts, index) => {
        const pageString = index + 1;
        let pageName;
        pageName = tagName + '-' + (index + 1);
        paramsArray.push(
          {params: {
            tag: pageName.toString(),
            page: pageString.toString(),
            tagName: tagName
          }})
      })
  }
  
  return {
    paths: paramsArray,
    fallback: false,
  }
}

export async function getStaticProps({params}) {

  // ポスト取得
  const keyword = params.tag
  const strIndex = keyword.lastIndexOf('-');
  const page = keyword.slice(strIndex + 1)
  const tagName = keyword.slice(0, strIndex)

  const res = await fetch(`${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&filter=tag:${tagName}&include=tags&page=${page}`)
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
        posts: posts,
        pagination: pagination,
        tagName: tagName,
        tagsArray
      }
    }
}

export default function Homes(props) {
  
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
            とあるWebエンジニアの生活雑貨&ガジェット&技術ブログ
          </dd>
        </dl>
      </div>

<div className={archiveStyles.pageTitle_sort_wrapper}>
  <PageTitle pageTitle={'Archive'} left={true} />
  <SortBtn tags={props.tagsArray} viewText={props.tagName} />
</div>

      <div className={archiveStyles.postWrapper} id="postWrapper">
        {props.posts.map((value, key) => {
          return <PostCard archiveStyles={archiveStyles} slug={"../archive/posts/" + value.slug} title={value.title} date={value.published_at} tags={value.tags[0].name ? value.tags[0].name : "tags"} thumbnail={value.feature_image} key={key} />
        })}
      </div>

      <div className={styles.pageNationWrapper}>
        <PageNation data={props.pagination} tagName={props.tagName} pageName={"tags"} />
      </div>

      <div className={styles.authorBoxWrapper}>
        <AuthorBox />
      </div>
    </>
  )
}
