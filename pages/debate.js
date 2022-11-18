import GlobalStyles from "./global-styles";
import Body from "../src/body";
import Header from "../src/header";
import { useSelector } from "react-redux";
import Synopsis from "../src/synopsis";
import { selectVote} from "../store/slices/userSlice";

const Debate = () => {

  const currentVote = useSelector(selectVote)


  return (
    <>
    {console.log(`Current vote: ${currentVote}`)}
      <Header />
      <GlobalStyles />
      {/* <Synopsis /> */}
      <Body />
    </>
  )
}

export default Debate;