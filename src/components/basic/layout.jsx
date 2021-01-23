import Header from './header';
import Footer from './footer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Styles from '../../styles/modules/layout.module.scss'
import { NoScroll } from '../../functions/main';

const Layout = (props) => {

  //redux
  const screenMode = useSelector(state => state.screenMode)

  useEffect(() => {
    NoScroll();
  },[])
  
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