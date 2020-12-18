import styles from '../styles/modules/layout.module.scss';
import archiveStyles from '../styles/modules/archive.module.scss';
import PageTitle from '../components/parts/pageTitle';
import PostCard from '../components/parts/postCard';
import PageNation from '../components/parts/pageNation';

const postArray = [
  {
    title: 'vercelデプロイテスト',
  },
  {
    title: 'post2',
  },
  {
    title: 'post3',
  },
  {
    title: 'post3',
  },
  {
    title: 'post3',
  }
]

const pageNationObj = {
    leftMenu: "Prev",
    leftMenuLink: "#",
    rightMenu: "Next",
    rightMenuLink: "#",
    centerMenu: "1/3",
    centerMenuState: false
}

export default function Home() {
  
  //pages
  return (
    <>
      <div className={archiveStyles.archiveTopLogoWrapper}>
        <dl className={archiveStyles.archiveTopLogo}>
          <dt>
            Soliloquy
          </dt>
          <dd>
            都内勤務フロントエンドエンジニアの独り言技術ブログ
          </dd>
        </dl>
      </div>

      <PageTitle pageTitle={'Archive'} Styles={styles} />

      <div className={archiveStyles.postWrapper} id="postWrapper">
        {postArray.map((value, key) => {
          return <PostCard archiveStyles={archiveStyles} title={value.title} key={key} />
        })}
      </div>

      <div className={styles.pageNationWrapper}>
        <PageNation data={pageNationObj} Styles={styles} />
      </div>
    </>
  )
}
