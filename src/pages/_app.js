import '../styles/foundations/globals.scss'
import '../styles/foundations/reset.scss' 
import Meta from '../components/basic/meta'
import Layout from '../components/basic/layout'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'

function MyApp({ Component, pageProps }) {

  //create store
  const store = useStore(pageProps.initialReduxState)

  //app override
  return (
    <Provider store={store}>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
