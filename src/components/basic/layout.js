import Header from './header';
import Footer from './footer';
import Styles from '../../../styles/layout.module.scss'

const Layout = (props) => {
  return (
    <>
      <Header Styles={Styles} />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {props.children}
        </div>
      </main>
      <Footer Styles={Styles} />
    </>
  )
}

export default Layout;