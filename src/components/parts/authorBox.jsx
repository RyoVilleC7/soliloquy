import Link from 'next/link'
import Styles from '../../styles/modules/author.module.scss'
import PageTitle from './pageTitle'
import Button from './button'

const AuthorBox = (props) => {
    return (
        <div className={Styles.author_box}>
            <PageTitle pageTitle={"Author"} />
            <div className={Styles.author_box_flexbox}>
            <img src="/images/Q7_dAVBg_400x400.jpg" className={Styles.author_box_image} />
            <dl>
                <dt>RYOTARO HADA / 羽田 涼太郎</dt>
                <dd>
                    都内勤務のWebエンジニア。<br/>
                    生活雑貨、ガジェット、Webに関する技術などを記事にしています。
                </dd>
                {/*<dd>
                    <Button text="About" link="/about" />
                </dd>
                */}
                <dd>
                    <ul>
                        <li><Link href="https://github.com/ryotarohada">GITHUB</Link></li>
                        <li><Link href="https://mobile.twitter.com/Ryotaro_WAVES">TWITTER</Link></li>
                        {/*<li><Link href="#">CONTACT</Link></li>*/}
                    </ul>
                </dd>
            </dl>
            </div>

        </div>
    )
}

export default AuthorBox;