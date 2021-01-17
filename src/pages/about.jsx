import styles from '../styles/modules/layout.module.scss';
import archiveStyles from '../styles/modules/archive.module.scss';
import PageTitle from '../components/parts/pageTitle';
import PostCard from '../components/parts/postCard';
import PageNation from '../components/parts/pageNation';

export const getStaticProps = async () => {
  //const res = await fetch(`https://ryotarohada.ghost.io/ghost/api/v3/content/posts/?key=7d660b12a28e4caff2f7ebe8dc&include=tags`)
  const res = await fetch('http://localhost:2371/ghost/api/v3/content/posts/?key=7fa0d0afb3e2820e637a3562fe&include=tags')
  const posts = await res.json()

    return {
      props: { posts }
    }
}

const pageNationObj = {
    leftMenu: "Prev",
    leftMenuLink: "#",
    rightMenu: "Next",
    rightMenuLink: "#",
    centerMenu: "1/3",
    centerMenuLink: "#",
    centerMenuState: false
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
            About
          </dd>
        </dl>
      </div>

      <PageTitle pageTitle={'Archive'} Styles={styles} />

      <div className={archiveStyles.postWrapper} id="postWrapper">
        {posts.map((value, key) => {
          return <PostCard archiveStyles={archiveStyles} slug={value.slug} title={value.title} date={value.published_at} tags={value.tags[0].name} thumbnail={value.feature_image} key={key} />
        })}
      </div>

      <div className={styles.pageNationWrapper}>
        <PageNation data={pageNationObj} Styles={styles} />
      </div>
    </>
  )
}
