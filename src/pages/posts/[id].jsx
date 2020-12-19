import styles from '../../styles/modules/layout.module.scss';
import archiveStyles from '../../styles/modules/archive.module.scss';
import PageTitle from '../../components/parts/pageTitle';
import PostCard from '../../components/parts/postCard';
import PageNation from '../../components/parts/pageNation';

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
            posts
          </dd>
        </dl>
      </div>
    </>
  )
}
