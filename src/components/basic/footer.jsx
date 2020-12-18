import Link from 'next/link';

const Footer = (props) => {
  
    //component
    return (
        <footer className={props.Styles.footer}>
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