import Link from 'next/link';
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from 'react-redux';
import { screenModeChange, spNavChange } from '../../store/actions/action'
import screenModeStyles from '../../styles/modules/screenMode.module.scss'
import PageTitle from '../parts/pageTitle';

const Header = (props) => {

    //redux
    const dispatch = useDispatch();
    const screenMode = useSelector(state => state.screenMode)
    const spNavState = useSelector(state => state.spNav)

    //component
    return (
        <header className={"transition" + " " + props.Styles.header + " " + (screenMode ? screenModeStyles.light_mode : screenModeStyles.dark_mode)}>
            <div className={props.Styles.container}>
                
                <h1 onClick={() => { if(spNavState){ dispatch(spNavChange()) }}}>
                    <Link href="/">Soliloquy</Link>
                </h1>

                <MediaQuery query="(min-width: 600px)">
                    <ul className={props.Styles.header_menu_wrapper}>
                        {/*<li><Link href='/about'>ABOUT</Link></li>*/}
                        <li><Link href='/'>ARCHIVE</Link></li>
                        {/*<li><Link href='#'>SEARCH</Link></li>*/}
                        <li onClick={() => {dispatch(screenModeChange())}}>
                            <img src={ screenMode ? "/images/light-mode.svg" : "/images/dark-mode.svg"} alt={ props.screenMode ? "ライトモード" : "ダークモード"} width={20} height={20} />
                        </li>
                    </ul>
                </MediaQuery>

                <MediaQuery query="(max-width: 599px)">
                    <div className={spNavState ? props.Styles.sp_menu_open : props.Styles.sp_menu_close} onClick={() => dispatch(spNavChange())}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </MediaQuery>
                
            </div>

            <MediaQuery query="(max-width: 599px)">
                <div className={props.Styles.sp_nav + " " + (spNavState ? "nav_in" : "nav_out")}>
                    <PageTitle pageTitle={'Menu'} />
                </div>
            </MediaQuery>

        </header>
    );
  };

export default Header;