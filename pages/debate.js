import GlobalStyles from "../styles/global-styles";
import Body from "../src/body";
import Header from "../src/header";
import { useSelector } from "react-redux";
import { selectUser, selectVote} from "../store/slices/userSlice";

const Debate = () => {

  const currentVote = useSelector(selectVote)
  const {nickname, name, picture, updated_at} = useSelector(selectUser)

  return (
    <>
      <Header />
      <GlobalStyles />
      <Body />
    </>
  )
}

export default Debate;
