import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { store } from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SettingsProvider } from '../context/global-context'
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SettingsProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SettingsProvider>
    </Provider>
  )

}
