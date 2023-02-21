import GlobalStyles from "../styles/global-styles";
import Body from "../src/body";
import Header from "../src/header";
import { useSelector } from "react-redux";
import { selectUser, selectVote} from "../store/slices/userSlice";

const Debate = () => {

  const currentVote = useSelector(selectVote)
  
  return (
    <>
      <Header />
      <GlobalStyles />
      <Body />
    </>
  )
}

export default Debate;
