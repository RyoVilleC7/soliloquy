import "prismjs/themes/prism-okaidia.css";
import '../styles/foundations/globals.scss'
import '../styles/foundations/reset.scss' 
import Layout from '../components/basic/layout'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import Router from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {

  Router.events.on('routeChangeComplete', url => gtag.pageview(url))

  //create store
  const store = useStore(pageProps.initialReduxState)

  //app override
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
