import { FC } from 'react'
import { Provider } from 'react-redux'
import { useStore, wrapper } from '../store'
import type { AppProps } from 'next/app'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(App)
