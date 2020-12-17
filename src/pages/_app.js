import '../../styles/globals.scss'
import '../../styles/reset.scss' 
import { Provider } from 'react-redux'
import { Store } from '../../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
