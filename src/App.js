import { WordCard } from "./components/WordCard/index";
import { WordListAndFavorites } from "./components/WordListAndFavorites/index";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="word-list-container">
        <WordCard />
        <WordListAndFavorites />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
