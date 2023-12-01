import "./App.css";
import HeroSection from "./components/HeroSection";
import ListingContainer from "./components/ListingContainer";
import SearchSection from "./components/SearchSection";

// Page Layout
function App() {
  return (
    <div className="w-screen h-screen overflow-scroll">
      <header className="border-b border-gray-600 px-10 py-8">
        SpaceX Dashboard{" "}
      </header>
      <main className="px-10">
        <HeroSection />
        <SearchSection />
        <ListingContainer />
      </main>
    </div>
  );
}

export default App;
