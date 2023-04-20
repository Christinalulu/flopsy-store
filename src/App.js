
import Router from "./routes/Router"
import Loader from "./components/shared/Loader";
import { useSelector } from "react-redux";
import Header from "./components/shared/Header";
function App() {
  const {isLoading} = useSelector (state => state.loader)
  return (
    <>
    <Header/>
    <Router/>
    {isLoading && <Loader/> }
   
    </>
  );
}
export default App;
