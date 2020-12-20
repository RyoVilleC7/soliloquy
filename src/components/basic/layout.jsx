import Header from './header';
import Footer from './footer';
import Head from './meta';
import { useSelector } from 'react-redux';
import Styles from '../../styles/modules/layout.module.scss'
import screenModeStyles from '../../styles/modules/screenMode.module.scss'

const Layout = (props) => {

  //redux
  const screenMode = useSelector(state => state.screenMode)
  
  //component
  return (
    <>
    <Head />
      <Header Styles={Styles} />
      <main className={"transition" + " " +Styles.main + " " + (screenMode ? screenModeStyles.light_mode : screenModeStyles.dark_mode)}>
        <div className={Styles.mainContainer}>
          {props.children}
        </div>
      </main>
      <Footer Styles={Styles} />
    </>
  )
}

export default Layout;