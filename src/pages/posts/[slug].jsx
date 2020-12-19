import styles from '../../styles/modules/layout.module.scss';
import archiveStyles from '../../styles/modules/archive.module.scss';
import BreadCrumb from '../../components/parts/breadcrumb'
import PageTitle from '../../components/parts/pageTitle';
import PageNation from '../../components/parts/pageNation';
import { useSelector } from 'react-redux';
import PostStyles from '../../styles/modules/post.module.scss'

/*
export const getStaticPaths = async () => {
  const res = await fetch(`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags`)
  let data = await res.json()
  data = await data.posts

  const paths = data.map((data, index) => {
    data[index].title
  })
  console.log(paths)
  // 事前ビルドしたいパスをpathsとして渡す fallbackについては後述
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/${params.slug}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}*/

export async function getStaticPaths() {
  const response = await fetch(
    'https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags'
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
    `https://ryotarohada.ghost.io/ghost/api/v3/content/posts/slug/${params.slug}/?key=7d660b12a28e4caff2f7ebe8dc&include=tags`
  )
  const post = await response.json();
  return {
    props: post
  }
}

const pageNationObj = {
    leftMenu: "前の記事へ",
    leftMenuLink: "#",
    rightMenu: "次の記事へ",
    rightMenuLink: "#",
    centerMenu: "記事一覧へ",
    centerMenuState: true,
    centerMenuLink: "#"
}

export default function Post(props) {
  const post = props.posts[0];
  const postData = {
    title: post.title,
    date: post.published_at,
    tag: post.tags[0].name,
    thumbnail: post.feature_image,
    text: post.html
  }
  const postDate = postData.date ? postData.date.substring(0,postData.date.indexOf("T")) : "Date";

  //redux
  const screenMode = useSelector(state => state.screenMode)
  
  //pages
  return (
    <>
    <BreadCrumb title={"タイトル"} />
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
      <img src={screenMode ? "/images/default-image-l.jpg" : "/images/default-image-d.jpg"} alt="default-image" />}
      </header>
      <main dangerouslySetInnerHTML={{__html: postData.text}}></main>
    </article>

    <PageNation data={pageNationObj} Styles={styles} />
    </>
  )
}
