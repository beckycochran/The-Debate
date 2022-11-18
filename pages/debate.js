import GlobalStyles from "./global-styles";
import Body from "../src/body";
import Header from "../src/header";
import { useSelector } from "react-redux";
import Synopsis from "../src/synopsis";
import { selectTotal } from "../store/slices/orderSlice";

const Debate = () => {

  // const vote = useSelector(selectTotal)

  return (
    <>
      <Header />
      <GlobalStyles />
      {/* <Synopsis /> */}
      <Body />
      {/* <h1>the vote is {vote}</h1> */}
    </>
  )
}

export default Debate;