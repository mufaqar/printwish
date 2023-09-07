import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { store } from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SettingsProvider } from '../context/global-context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import { Router } from 'next/router'
import Loader from '@/components/loader'
import { GetStaticProps } from 'next'
import { apiRequest } from '@/config/requests'

export default function App({ Component, pageProps, AllProduct }: any) {

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false)
    });
  }, [Router])

  useEffect(()=>{
    const f = async () =>{
      const dataForProducts = {
        per_page: 999,
      };
      const { products } = await apiRequest('POST', 'get-products', dataForProducts)
      console.log("🚀 ~ file: _app.tsx:37 ~ f ~ products:", products)
    }
    f()
  })

  return (
    <>
      <Provider store={store}>
        {isLoading && <Loader isLoading={isLoading}/>}
        <SettingsProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SettingsProvider>
      </Provider>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </>
  )

}
