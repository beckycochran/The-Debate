import GlobalStyles from "../global-styles";
import Header from "./header";
import Body from "./body";
import { useRouter } from 'next/router';
import Link from 'next/link';


import Synopsis from "./synopsis";
const Main = () => {
  const router = useRouter()
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
        <Synopsis />
      <Body />
    </>
  )
}

export default Main;