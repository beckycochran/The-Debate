import '../styles/globals.css'
import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { store } from "../store/store"
import { Provider } from "react-redux"
import { animated } from '@react-spring/web'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  )
}

export default MyApp
