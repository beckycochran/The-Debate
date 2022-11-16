import GlobalStyles from "./global-styles";
import Body from "../src/body";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from "../src/header";

import Synopsis from "../src/synopsis";
const Debate = () => {
  const router = useRouter()
  return (
    <>
      <Header />
      <GlobalStyles />
      {/* <Synopsis /> */}
      <Body />
    </>
  )
}

export default Debate;