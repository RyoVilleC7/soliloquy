import Header from './header';
import Footer from './footer';
import { useSelector } from 'react-redux';
import Styles from '../../styles/modules/layout.module.scss'
import screenModeStyles from '../../styles/modules/screenMode.module.scss'

const Layout = (props) => {

  //redux
  const screenMode = useSelector(state => state.screenMode)
  
  //component
  return (
    <>
      <div id="wrapper" className={screenMode ? 'light_mode' : 'dark_mode'}>
      <Header Styles={Styles} />
      <main className={"transition" + " " + Styles.main}>
        <div className={Styles.mainContainer}>
          {props.children}
        </div>
      </main>
      <Footer Styles={Styles} />
      </div>
    </>
  )
}

export default Layout;