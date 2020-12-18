import Link from 'next/link';
import Image from 'next/image';
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from 'react-redux';
import { screenModeChange } from '../../store/actions/action'

const Header = (props) => {

    //redux
    const dispatch = useDispatch();
    const screenMode = useSelector(state => state.screenMode)

    //component
    return (
        <header className={props.Styles.header}>
            <div className={props.Styles.container}>
                
                <h1>
                    <Link href='#'>Soliloquy</Link>
                </h1>

                <MediaQuery query="(min-width: 600px)">
                    <ul className={props.Styles.header_menu_wrapper}>
                        <li><Link href='#'>ABOUT</Link></li>
                        <li><Link href='#'>ARCHIVE</Link></li>
                        <li><Link href='#'>SEARCH</Link></li>
                        <li onClick={() => {dispatch(screenModeChange())}}>
                            <Image src={ screenMode ? "/images/light-mode.svg" : "/images/dark-mode.svg"} alt={ props.screenMode ? "ライトモード" : "ダークモード"} width={20} height={20} />
                        </li>
                    </ul>
                </MediaQuery>

                <MediaQuery query="(max-width: 599px)">
                    <div className={props.Styles.sp_menu}></div>
                </MediaQuery>
                
            </div>
        </header>
    );
  };

export default Header;