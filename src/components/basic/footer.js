import Link from 'next/link';

const Footer = (props) => {
    return (
        <footer className={props.Styles.footer}>
            <div className={props.Styles.container}>
                <ul>
                    <li><Link href="#">GITHUB</Link></li>
                    <li><Link href="#">TWITTER</Link></li>
                    <li><Link href="#">CONTACT</Link></li>
                </ul>
                <span>©︎ RYOTARO HADA</span>
            </div>
        </footer>
    )
  }
  
  export default Footer;