import '../styles/globals.css'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/reducer';

const store = createStore(reducer)


function MyApp({ Component, pageProps }) {
  return <Provider store = {store}> <Component {...pageProps}/> </Provider>
}

export default MyApp
