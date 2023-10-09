import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { store } from '@/store/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { SettingsProvider } from '../context/global-context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import { Router } from 'next/router'
import Loader from '@/components/loader'
import NextNProgress from 'nextjs-progressbar';
import GoogleAnalytics from "@bradgarropy/next-google-analytics"


export default function App({ Component, pageProps }: any) {

  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   Router.events.on("routeChangeStart", (url) => {
  //     setIsLoading(true)
  //   });

  //   Router.events.on("routeChangeComplete", (url) => {
  //     setIsLoading(false)
  //   });

  //   Router.events.on("routeChangeError", (url) => {
  //     setIsLoading(false)
  //   });
  // }, [Router])

  

  return (
    <>
      <NextNProgress color="#f89635" startPosition={0.3} height={3} showOnShallow={true} />
      <GoogleAnalytics measurementId="G-SDRXNDYY1L" />
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
