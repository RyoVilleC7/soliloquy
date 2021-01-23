import Link from 'next/link';
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from 'react-redux';
import { screenModeChange, spNavChange } from '../../store/actions/action'
import screenModeStyles from '../../styles/modules/screenMode.module.scss'
import PageTitle from '../parts/pageTitle';

const Header = props => {

    //redux
    const dispatch = useDispatch();
    const screenMode = useSelector(state => state.screenMode)
    const spNavState = useSelector(state => state.spNav)

    //component
    return (
        <header className={"transition" + " " + props.Styles.header + " " + "global_mode"}>
            <div className={props.Styles.container}>
                
                <h1 onClick={() => { if(spNavState){ dispatch(spNavChange()) }}}>
                    <Link href="/">Soliloquy</Link>
                </h1>

                <MediaQuery query="(min-width: 500px)">
                    <ul className={props.Styles.header_menu_wrapper}>
                        {/*<li><Link href='/about'>ABOUT</Link></li>*/}
                        <li><Link href='/archive/1'>ARCHIVE</Link></li>
                        <li><Link href='/tags/tag-all'>TAGS</Link></li>
                        <li onClick={() => {dispatch(screenModeChange())}}>
                            <img src={ screenMode ? "/images/light-mode.svg" : "/images/dark-mode.svg"} alt={ props.screenMode ? "ライトモード" : "ダークモード"} width={20} height={20} />
                        </li>
                    </ul>
                </MediaQuery>

                <MediaQuery query="(max-width: 499px)">
                    <div className={spNavState ? props.Styles.sp_menu_open : props.Styles.sp_menu_close} onClick={() => dispatch(spNavChange())}>
                        <span className="global_mode_rv"></span>
                        <span className="global_mode_rv"></span>
                        <span className="global_mode_rv"></span>
                    </div>
                </MediaQuery>
                
            </div>

            <MediaQuery query="(max-width: 599px)">
                <div className={props.Styles.sp_nav + " " + (spNavState ? "nav_in" : "nav_out") + " " + "global_mode" + " " + "noscroll"}>
                    <PageTitle pageTitle={'Menu'} />
                    <ul className={props.Styles.header_menu_wrapper}>
                        <li onClick={() => { if(spNavState){ dispatch(spNavChange()) }}}>
                            <Link href='/archive/1'>
                                <a>
                                    <dl>
                                        <dt>ARCHIVE</dt>
                                        <dd>記事一覧</dd>
                                    </dl>
                                </a>
                            </Link>
                        </li>
                        <li onClick={() => { if(spNavState){ dispatch(spNavChange()) }}}>
                            <Link href='/tags/tag-all'>
                                <a>
                                    <dl>
                                        <dt>TAGS</dt>
                                        <dd>タグ一覧</dd>
                                    </dl>
                                </a>
                            </Link>
                        </li>
                        <li onClick={() => {dispatch(screenModeChange())}}>
                            <img src={ screenMode ? "/images/light-mode.svg" : "/images/dark-mode.svg"} alt={ props.screenMode ? "ライトモード" : "ダークモード"} width={20} height={20} />
                        </li>
                    </ul>

                    
        <footer className={"transition" + " " +props.Styles.footer}>
            <div className={props.Styles.container}>
                <ul>
                    <li><Link href="https://github.com/RyoVilleC7">GITHUB</Link></li>
                    <li><Link href="https://mobile.twitter.com/Ryotaro_WAVES">TWITTER</Link></li>
                    {/*<li><Link href="#">CONTACT</Link></li>*/}
                </ul>
                <span>©︎ RYOTARO HADA</span>
            </div>
        </footer>
                </div>
            </MediaQuery>

        </header>
    );
  };

export default Header;