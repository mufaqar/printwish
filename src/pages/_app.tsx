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
import CookiesMessage from '@/components/UI/cookiesMessage'
import TawkToChat from '@/components/TawkToChat/TawkToChat'
import OfferModelBox from '@/components/UI/modelBox/Offer'
import Head from 'next/head'

export default function App({ Component, pageProps }: any) {

  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookies] = useState(false)
  const [openOfferModel, setOpenOfferModel] = useState<boolean>(false)
  const [modalIsOpen, setIsOpen] = useState(true)
  console.log('modalIsOpen', modalIsOpen);

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


  useEffect(() => {
    const localCookies = localStorage.getItem('cookies')

    if (localCookies === "true") {
      setCookies(false)
    } else {
      const timer = setTimeout(() => {
        setCookies(true)
      }, 1000)
      return () => clearTimeout(timer);
    }
  }, [cookies]);

  useEffect(() => {
    setTimeout(() => {
      const modelState: any = sessionStorage.getItem('modelState')
      const s = JSON.parse(modelState)
      if (s) {
        setOpenOfferModel(false)
      } else {
        setOpenOfferModel(true)
      }
    }, 5000);
  }, [])

  useEffect(() => {
    const modelState: any = sessionStorage.getItem('modelState')
    const s = JSON.parse(modelState)
    if (s) {
      setIsOpen(s.state)
    }
  }, [modalIsOpen])

  

  return (
    <>
      {/* <NextNProgress color="#f89635" startPosition={0.3} height={3} showOnShallow={true} /> */}
      
      <Provider store={store}>
        {isLoading && <Loader isLoading={isLoading} />}
        <SettingsProvider>
          <Header />
          <GoogleAnalytics measurementId="GTM-TGC54P3" />
          <Component {...pageProps} />
          <Footer />
          <TawkToChat />
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
      {
        cookies && <CookiesMessage setCookies={setCookies} />
      }
      {openOfferModel && <OfferModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />}
    </>
  )

}
