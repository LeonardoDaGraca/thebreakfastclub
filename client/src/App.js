import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Search } from "./components/Search/Search";
import { CreateExam } from "./components/Create/CreateExam";
// import { Main } from "./components/Main/Main"
// import { CardData } from "./components/Cards/CardData";

const App = () => {
  return (
    <>
      <div className=" flex flex-col h-screen w-screen justify-between ">
        <div id="header" className="">
          <Navbar />
        </div>

        <div id="search" className="">
          <Search />
          <CreateExam />
        </div>

        <div id="footer" className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
