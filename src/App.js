import { WordCard } from "./components/WordCard/index";
import { WordListAndFavorites } from "./components/WordListAndFavorites/index";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="word-list-container">
        <WordCard />
        <WordListAndFavorites />
      </div>
      <Footer/>
    </>
  );
}

export default App;
