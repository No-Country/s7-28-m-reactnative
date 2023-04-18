import Authors from "./components/Authors";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-inter overflow-y-hidden">
      <Header />
      <Description />
      <Authors />
      <Footer />
    </div>
  );
}

export default App;
