import '../styles/globals.css'
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  return (
    // <Auth0Provider
    //   domain={ }
    //   clientId={ }
    //   redirectUri={'http://localhost/3000/debate/main'}>
      <Component {...pageProps} />
    // </Auth0Provider> 
  )
}

export default MyApp
