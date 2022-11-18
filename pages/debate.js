import GlobalStyles from "./global-styles";
import Body from "../src/body";
import Header from "../src/header";
import Synopsis from "../src/synopsis";
import { useSelector } from "react-redux";
import { selectVote} from "../store/slices/userSlice";

const Debate = () => {

  const currentVote = useSelector(selectVote)


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