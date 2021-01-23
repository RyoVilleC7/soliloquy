import styles from '../../styles/modules/layout.module.scss';
import archiveStyles from '../../styles/modules/archive.module.scss';
import tagsStyles from '../../styles/modules/tags.module.scss';
import PageTitle from '../../components/parts/pageTitle';
import TagCard from '../../components/parts/tagCard';
import AuthorBox from '../../components/parts/authorBox';
import Meta from '../../components/basic/meta';
import "prismjs/themes/prism-tomorrow.css"
import { API_URL, CONTENT_API_KEY } from '../../functions/api';

export const getStaticProps = async () => {

  const unionArray = [];

  // タグ一覧取得
  const tagsArray = [];
  const tagsData = await fetch(`${API_URL}ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}`);
  const tagsList = await tagsData.json();
  for (let i = 0; i < tagsList.tags.length; i++) {
    tagsArray.push(tagsList.tags[i].slug);
  }

  // 15記事を一単位としたぺージ数を算出
    const tagsCountArray = [];
  for (let i = 0; i < tagsArray.length; i++) {
    const res = await fetch(`${API_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&filter=tag:${tagsArray[i]}`);
    const data = await res.json();
    tagsCountArray.push(data.posts.length);
  }

  for (let i = 0; i < tagsArray.length; i++) {
      const array = [];
      array.push(tagsArray[i]);
      array.push(tagsCountArray[i]);
      unionArray.push(array);
  }

    return {
      props: { unionArray }
    }
}

export default function TagAll(props) {
  
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
      <PageTitle pageTitle={'Tags'} />
    </div>

      <div className={archiveStyles.postWrapper} id="postWrapper">
          <ul className={tagsStyles.tags_all_wrapper}>
            {props.unionArray.map((value, key) => {
            return <TagCard title={value[0]} tagsCount={value[1]} key={key}/>
          })}
          </ul>
      </div>

      <div className={styles.authorBoxWrapper}>
        <AuthorBox />
      </div>
    </>
  )
}
