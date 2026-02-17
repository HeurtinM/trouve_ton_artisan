import React from "react";
import { Routes, Route,  Link } from "react-router-dom";
import Home from "./pages/Home";
import ArtisanList from "./pages/ArtisansList";
import ArtisanSheet from "./pages/ArtisansSheet";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return(
    <div className="App">
      <Header/>
      <main>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/artisans" element={<ArtisanList />} />
        <Route path="/artisans/:id" element={<ArtisanSheet />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
      </main>
    </div>
  );
}

export default App;
