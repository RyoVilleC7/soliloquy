import Link from 'next/link';
import { useSelector } from 'react-redux';
import screenModeStyles from '../../styles/modules/screenMode.module.scss'

const Footer = (props) => {

    //redux
    const screenMode = useSelector(state => state.screenMode)
  
    //component
    return (
        <footer className={"transition" + " " +props.Styles.footer + " " + (screenMode ? screenModeStyles.light_mode : screenModeStyles.dark_mode)}>
            <div className={props.Styles.container}>
                <ul>
                    <li><Link href="https://github.com/RyoVilleC7">GITHUB</Link></li>
                    <li><Link href="https://mobile.twitter.com/Ryotaro_WAVES">TWITTER</Link></li>
                    <li><Link href="#">CONTACT</Link></li>
                </ul>
                <span>©︎ RYOTARO HADA</span>
            </div>
        </footer>
    )
  }
  
  export default Footer;